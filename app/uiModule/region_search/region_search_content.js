'use strict';
(function() {
	var regionSearchController = function($scope, NgTableParams, $routeParams, regionSearchService, $filter) {

		console.log("JS Loaded");
		$scope.searchedContent = [];
		$scope.searchedEditContent = [];
        $scope.editContent = [];
		$scope.editedTableParams = [];
		$scope.searchKey = "";
        $scope.isEditing = false;
        $scope.isAdding = false;
		$scope.isResultEnabled = false;
		$scope.myErrr = false;
		$scope.showError = false;
		$scope.tableParams;
        $scope.editParams;

		$scope.isEditResultEnabled = true;

		$scope.init = function() {// called to aviod page container issue
			jQuery(document).ready(function() {
				jQuery(".content-wrapper").css('min-height', jQuery(window).height() - (jQuery('.main-footer').outerHeight() + jQuery('.main-header').outerHeight()));

			});
		};

		$scope.search = function() {
			
			$scope.myErrr = false;
			if ($scope.searchKey === "" || $scope.searchKey === undefined) {
				$scope.myErrr = true;
			} else {
				$scope.myErrr = false;
				if ($scope.seclectedKey === "" || $scope.seclectedKey === undefined) {
					$scope.seclectedKey = "description";
				}
				if ($scope.searchKey) {
					regionSearchService.serach($scope.seclectedKey, $scope.searchKey).then(function(response) {
						$scope.isResultEnabled = false;

						$scope.searchedContent = createUIDataModel(response.data);

						if ($scope.searchedContent.length > 0) {
							$scope.isResultEnabled = true;
							$scope.myErrr = false;
							$scope.showError = false;
							$scope.tableParams = getNgtableParam($scope.searchedContent);
							$scope.tableParams.reload();
							$scope.tableParams.page(1);
							$scope.tableParams.sorting({});
						} else {
							$scope.myErrr = false;
							$scope.showError = true;
							$scope.isResultEnabled = false;
						}
					}, function(response) {
						console.log("Error Happned while Calling Service");
						$scope.myErrr = false;
						$scope.showError = true;
					});

				} else {
					$scope.tableParams = getNgtableParam($scope.searchedContent);
					reloadTableContent($scope.tableParams);
				}

			}
		};

		$scope.cancelRegionRow = function(index) {
			console.log("editRegionRow index : " + index);
			var region = getRegionById(index);
			region.isEdited = false;
			region.editedNormalizedRegionTitle = "";
			region.editedRegionTitle = "";
			region.editedRegionUse = "";
			region.editedNcid = "";

			$scope.savedMessage = false;
			$scope.saveErrr = false;
			$scope.requiredErrr = false;
			$scope.myErrr = false;

			console.log($scope.tableParams);
		};

		$scope.acceptRegionRow = function(index) {
			console.log("editRegionRow index : " + index);

			var region = getRegionById(index);
			region.action = "Added";

			$scope.savedMessage = false;
			$scope.saveErrr = false;
			$scope.requiredErrr = false;
			$scope.myErrr = false;

			if (region.editedRegionUse === "" || region.editedNcid === "" || region.editedNormalizedRegionTitle === "" || region.editedRegionTitle === "") {
				$scope.requiredErrr = true;
				region.isEdited = true;
				return;
			}

			regionSearchService.saveEditedRegion(region.editedRegionUse, region.editedNcid, region.editedNormalizedRegionTitle, region.editedRegionTitle).then(function(response) {

				$scope.savedMessage = true;
				region.editedNormalizedRegionTitle = "";
				region.editedRegionTitle = "";
				region.editedRegionUse = "";
//				region.editedNcid = "";

			}, function(response) {
				console.log("Error Happned while Calling Service");
				$scope.saveErrr = true;
				region.isEdited = true;
			});

//			$scope.loadEditTableData();
		};
        
        $scope.save = function(regionObj,rowForm,index){
            regionObj.isEditing = false;
            console.log(regionObj);
        var getCurrentUrl = window.location.href;
                var getBranchid = getCurrentUrl.split("?").pop();
               console.log(getBranchid);
            var varient = $scope.editContent[regionObj];
            console.log(varient);
            
            var nromzledArray = [];
            var nrm =jQuery("#nromRTId").val();
            var nrmChange = nrm.split(",");
           console.log(nrmChange.length);
            for( var i=0;i< parseInt(nrmChange.length)-1;i++){
                console.log(i);
                nromzledArray.push(nrmChange[i]);
                
            }
            var regUseArray = [];
            
            console.log(nromzledArray);
            var regnam =jQuery("#reguseId").val();
            var regChange = regnam.split(",");
           console.log(regChange.length);
            for( var i=0;i< parseInt(regChange.length)-1;i++){
                console.log(i);
                regUseArray.push(regChange[i]);
                
            }
            console.log(regUseArray);
            

          var rUse =  toObject(nromzledArray, regUseArray);
            console.log(rUse);
            function toObject(nromzledArray,regUseArray) {
                var result = {};

    for (var i = 0; i < nromzledArray.length; i++) {
        result[nromzledArray[i]] = regUseArray[i];
    }

        console.log(result);
                
        return result;
            }   
                var request = [
	{
		"regionTitle": regionObj.regionTitle,
		"normalizedRegionTitles": nromzledArray,
		"action" : regionObj.action,
		"regionUses": rUse,
		"branchId" : parseInt(getBranchid)
	
	}
]
                
          console.log(request);
            regionSearchService.regSave(request).then(function(response){
                console.log(response);
            });
//           
        };
//        function reloadTableData(){
//            
//            var getCurrentUrl = window.location.href;
//                var getBranchid = getCurrentUrl.split("/").pop();
//           console.log(getBranchid); varientSearchService.editList(getBranchid).then(function(response){
//            console.log(response);
//            $scope.editContent = createDataModel(response.data);
//            console.log(response);  
//            $scope.isResultEnabled = true;
//            $scope.editParams = getNgtableParam($scope.editContent);
//            reloadTableContent( $scope.editParams);
//            $scope.editParams.page(1);
//            $scope.editParams.sorting({});
//            }, 
//            function(response) {
//            console.log("Error Happned while Calling Service");
//            });
//        }
        
         $scope.cancel = function(regionObj, rowForm)
        {
             $scope.isEditing = false;
            regionObj.isEditing = false;
            
        }
        
        
//        $scope.save = function(regionObj, rowForm,index)
//        { 
//            
//            if($scope.selectedActionRow!=null)
//            {
//                
//                var varient = $scope.editContent[regionObj];
//                $scope.isEditing = false;
//               // varient.isEditing = false;
//               var getCurrentUrl = window.location.href;
//                var getBranchid = getCurrentUrl.split("?").pop();
//               console.log(getBranchid); regionSearchService.regSave(getBranchid,$scope.editContent[regionObj],$scope.gettestId,'Clone').then(function(response)
//                {
//                    
//                    console.log(response);
//                    if(response.data.message=== "Added successfully"){
//                        console.log("status");
//                        localStorage.setItem("newTestId",response.data.testId);
//                        console.log(response.data.testId);
//                        $scope.gettestId=response.data.testId;
//                        
////                        reloadTableData();
//                        
//                    }
//                    $scope.editParams = getNgtableParam($scope.editContent);
//                }, function(response) {
//                    console.log("Exception while calling the deleting records");
//                });
//         }
//    };
//        
//        
        $scope.close = function(){
           
          jQuery(document).find("#myModal").removeClass("show").addClass("hide"); 
            
        };
        $scope.regionuse = function(){
            $scope.regionsName= "";
            regionSearchService
							.tblRegionUseLimit()
							.then(
									function(response) {
                                      console.log(response);
                                      $scope.regionsName =  response.data.regions; 
                                    
                 });         
        };
        $scope.normalizedregiontitle = function(){
            $scope.regionsName= "";
            regionSearchService
							.getNormalizedRegionTitle()
							.then(
									function(response) {
                                      console.log(response);
                                      $scope.regionsName =  response.data.regions; 
                                      console.log($scope.regionsName.title);
                                    
                 });         
        };
         $scope.regionTitleFilter = function(regTitle){
            $scope.regionsName= "";
             console.log(regTitle);
            regionSearchService
							.getRegionFilter("history")
							.then(
									function(response) {
                                      console.log(response);
                                      $scope.regionsName =  response.data.regions; 
                                      console.log($scope.regionsName.title);
                                    
                 });         
        };
        
        $scope.normalizedregtitle = function(){
            jQuery(document).find("#textAreaLastCell").empty();
            $scope.normalizedregiontitle();
            
            var popupnrt = jQuery(document).find("#myModal");
           if (popupnrt.hasClass('hide'))
           {
               
               popupnrt.toggleClass("show"); 
            } 
            
        };
        $scope.reguse = function(){
            jQuery(document).find("#textAreaLastCell").empty();
           $scope.regionuse();
            
            var popupnrt = jQuery(document).find("#myModal");
           if (popupnrt.hasClass('hide'))
           {
               
               popupnrt.toggleClass("show"); 
            } 
        };
        
		$scope.shiftData = function() {
			var optionsVal=jQuery(document).find("#selId").val();
			var optionsAdd = jQuery(document).find("#selId").find('option:selected');	
			//var option = abbb.attr('value');
				
			for(var x in optionsVal) {
				optionsAdd.remove();
				jQuery(document).find("#textAreaLastCell").append("<option value ='"+optionsVal[x]+"'>"+optionsVal[x]+"</option>");
			}
		};

		$scope.shiftLastCell = function() {
			var shiftCellVal=jQuery(document).find("#textAreaLastCell").val();
			var selShiftCell = jQuery(document).find("#textAreaLastCell").find('option:selected');	
			//var option = abbb.attr('value');
				
			for(var x in shiftCellVal) {
				selShiftCell.remove();
				jQuery(document).find("#selId").append("<option value ='"+shiftCellVal[x]+"'>"+shiftCellVal[x]+"</option>");
			}
		};
           $scope.add = function () {
            $scope.isAdding = true;
            
            $scope.editParams.settings().dataset.unshift({
                regionTitle:"",
                normalizedRegionTitle:"",
                regionUse:"",
               
            });
            
            reloadTableContent($scope.editParams);
           $scope.editParams= getNgtableParam($scope.editParams);
           reloadTableContent($scope.editParams);
            $scope.isEditing = true;
            var varient = $scope.editContent[$scope.selectedActionRow];
            varient.isEditing = true;
    };
        $scope.regionUseSave = function(){
            var regionOptn = jQuery(document).find("#selId option").data( "optionname" );
            var str = "";
            jQuery(document).find("#textAreaLastCell option").each(function () { 
                str += $(this).text() + ","; 
            });
            console.log(regionOptn);
            if(regionOptn === "reguse") {

                jQuery(document).find("#reguseId").val(str);
            } else {
            
                jQuery(document).find("#nromRTId").val(str);
            }
            console.log(str);
            $scope.close();
        };
        $scope.clonedRow = function(index)
       {
        console.log("clonedRow index"+ index);
           var varient =  $scope.searchedContent[index];
           varient.action = "Edit";
           var cloneObject = clone(varient);
           cloneObject.isEditing = false;
           console.log(cloneObject);
           $scope.editContent.push(cloneObject);
           $scope.editParams = getNgtableParam($scope.editContent);
           console.log($scope.editContent);
            console.log($scope.editParams);
           reloadTableContent($scope.editParams);
           //$scope.tableParams= getNgtableParam($scope.searchedContent);
           //console.log($scope.searchedContent);
           //reloadTableContent($scope.tableParams)
       };
        
        
        
        function clone(obj) {
            if (null == obj || "object" != typeof obj) return obj;
            console.log(obj);
            var copy = obj.constructor();
            
            for (var attr in obj) {
                console.log(attr);
                console.log(obj.hasOwnProperty(attr));
                if(attr == "varString"){ 
                    obj[attr]="";
                } 
                
                if (obj.hasOwnProperty(attr)) copy[attr] = obj[attr];
                }
            
            console.log(copy);
            return copy;
        }
        $scope.deleteCopyRow = function(index) {
			var region = getRegionById(index);
			region.action = "Delete";

			$scope.savedMessage = false;
			$scope.saveErrr = false;
			$scope.requiredErrr = false;

			regionSearchService.saveDeletedRegion(region.regionUse, region.ncid, region.normalizedRegionTitle, region.regionTitle).then(function(response) {
				$scope.savedMessage = false;
				region.isDeleted = true;

			}, function(response) {
				console.log("Error Happned while Calling Service");
				$scope.saveErrr = true;
				region.isDeleted = false;
			});

//			$scope.loadEditTableData();

		}

		$scope.editRegionRow = function(index) {
			console.log("editRegionRow index : " + index);
            
			resetEditedRows();
			var region = getRegionById(index);
            
			region.isEdited = true;
			console.log(region);
			$scope.savedMessage = false;
			$scope.saveErrr = false;
			$scope.requiredErrr = false;

		}

//		$scope.loadEditTableData = function() {
//
//			var branchid = "";
//			regionSearchService.loadEditedList().then(function(response) {
//				$scope.isEditResultEnabled = false;
//
//				$scope.searchedEditContent = createDataModel(response.data);
//
//				if ($scope.searchedEditContent.length > 0) {
//					$scope.isEditResultEnabled = true;
//					$scope.myErrr = false;
//					$scope.showError = false;
//					$scope.editedTableParams = getNgtableParam($scope.searchedEditContent);
//					$scope.editedTableParams.reload();
//					$scope.editedTableParams.page(1);
//					$scope.editedTableParams.sorting({});
//				} else {
//					$scope.myErrr = false;
//					$scope.showError = true;
//					$scope.isEditResultEnabled = false;
//				}
//			}, function(response) {
//				console.log("Error Happned while Calling Service");
//			});
//		}

		function createUIDataModel(data) {
			var results = [];
			var regions = data.regions;
			for (var i = 0; i < regions.length; i++) {
				var region = regions[i];
				var resRegion = {};
				resRegion.data = region;

				resRegion.regionId = i;
				resRegion.regionUse = region.description;
				resRegion.regionTitle = region.regionTitle;
				resRegion.normalizedRegionTitle = region.normalizedRegionTitle;
				resRegion.editedNormalizedRegionTitle = "";
				resRegion.editedRegionTitle = "";
				resRegion.ncid = region.ncid;
                resRegion.canRemoved = true;
                resRegion.canCloned = true;
				resRegion.isDeleted = false;
				resRegion.isEdited = false;

				results.push(resRegion);
			}
			return results;
		}
		;

		function getRegionById(regId) {
			var region = $filter('filter')($scope.searchedContent, {
				regionId : regId
			}, true);
			return region[0];
		}

		function resetEditedRows() {
//			for (var i = 0; i < $scope.searchedContent.length; i++) {
				var region = $scope.searchedContent[0];
                console.log(region.ncid);
				if (region.isEdited) {
					region.isEdited = true;
					region.editedNormalizedRegionTitle = region.normalizedRegionTitle;
					region.editedRegionTitle = region.regionTitle;
					region.editedRegionUse = region.regionUse;
					region.editedNcid = region.ncid;
				
			}
		}

		function createDataModel(data) {
			var results = [];
			var edits = data.regions;
			for (var i = 0; i < edits.length; i++) {
				var edit = edits[i];
				var resRegion = {};
				resRegion.data = edit;
				resRegion.regionUse = edit.description;
				resRegion.regionTitle = edit.regionTitle;
				resRegion.normalizedRegionTitle = edit.normalizedRegionTitle;
				//resRegion.ncid = edit.ncid;
				results.push(resRegion);
			}
			return results;
		}

		function reloadTableContent(table) {
			table.reload();
			table.page(1);
			table.sorting({});
		}

		function getNgtableParam(data) {
			var ngtable = new NgTableParams({
				page : 1,
				count : 5,
				sorting : {
					name : "asc"
				}
			}, {
				dataset : data
			});
			return ngtable;
		}

//		$scope.loadEditTableData();
        $scope.init();
	};
	angular.module('RegionApp').controller('regionSearchController', [ '$scope', 'NgTableParams', '$routeParams', 'regionSearchService', '$filter', regionSearchController ]);

}());
