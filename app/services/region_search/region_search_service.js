'use strict';
(function() {
    var regionSearchService = function($http,urlConfig,$httpParamSerializer) {
        this.serach = function(searchKey,searchValue) {
          // console.log(currentPage);
          return $http({
                  method : "GET",
                  url : urlConfig.basePath + urlConfig.urls.regionSearch+searchKey+"&value="+ searchValue+"&limit=100"
              });
        };
//        this.loadEditedList = function(branchId) {
//          console.log(branchId);
//          return $http({
//                  method : "GET",
//                  url : urlConfig.basePath + urlConfig.urls.editedRegions
//              });
//        };
        
        this.tblRegionUseLimit = function() {
          
          return $http({
                  method : "GET",
                  url : urlConfig.basePath + urlConfig.urls.mappingRegionUse+"?limit=20"
              });
        };//mappingRegionUse
        
        this.tblRegionUse = function(regionUseId) {
          return $http({
                  method : "GET",
                  url : urlConfig.basePath + urlConfig.urls.normalizedRegUse+regionUseId+"?limit=20"
              });
        };
        
		this.saveEditedRegion = function(editedRegionUse, editedNcid, editedNormalizedRegionTitle, editedRegionTitle) {
			var request = {
					regionTitle : editedRegionTitle,
					normalizedRegionTitle : editedNormalizedRegionTitle,
					ncid : editedNcid,
					description : editedRegionUse,
					action: "Add"
			};
			
			return $http({
				method : "POST",
				url : urlConfig.basePath + urlConfig.urls.saveEditedRegionsPost,
				data : angular.toJson(request),
				headers : {
					'Content-Type' : 'application/json'
				}
			});
		};
		
		this.saveDeletedRegion = function(editedRegionUse, editedNcid, editedNormalizedRegionTitle, editedRegionTitle) {
			var request = {
					regionTitle : editedRegionTitle,
					normalizedRegionTitle : editedNormalizedRegionTitle,
					ncid : editedNcid,
					description : editedRegionUse,
					action: "Delete"
			};
			
			return $http({
				method : "POST",
				url : urlConfig.basePath + urlConfig.urls.saveDeletedRegionsPost,
				data : angular.toJson(request),
				headers : {
					'Content-Type' : 'application/json'
				}
			});
		};
        this.tblRegionUseLimit = function() {
          
          return $http({
                  method : "GET",
                  url : urlConfig.basePath + urlConfig.urls.mappingRegionUse+"?limit=20"
              });
        };
        
        this.tblRegionUse = function(regionUseId) {
          return $http({
                  method : "GET",
                  url : urlConfig.basePath + urlConfig.urls.normalizedRegUse+regionUseId+"?limit=20"
              });
        };
        
        //---- NRT
        this.getNormalizedRegionTitle = function() {
			return $http({
				method : "GET",
				url : urlConfig.basePath + urlConfig.urls.normalizedRegionTitles
			});
		};
        this.getRegionFilter = function(regionTitle) {
			return $http({
				method : "GET",
				url : urlConfig.basePath + urlConfig.urls.regionFilter+regionTitle
			});
		};
        
        this.regSave = function(payloads) {
			  
            return $http({
				method : "POST",
				url : urlConfig.basePath + urlConfig.urls.regionsSave,
				data : angular.toJson(payloads),
				headers : {
					'Content-Type' : 'application/json'
				}
			});
		};
        
       
        
    };
    
    var regionAppModule = angular.module('RegionApp');
    regionAppModule.service('regionSearchService',['$http','urlConfig','$httpParamSerializer',regionSearchService]);
}());
