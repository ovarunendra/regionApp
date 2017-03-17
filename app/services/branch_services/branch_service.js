'use strict';
(function() {
    <!-- getBranchilist,getBranchRevert & getBranchStatus belongs to PBI-worspacepage -->
    var branchService = function($http,urlConfig) {
// alert(window.location.host);
// alert(window.location.hostname);
        // console.log(urlConfig.basePath);
        this.getBranchList = function(branchName) {
            var request = {
                name: branchName,
                type: 'regions',
                userId: 1,
                
            };
            
            // console.log(request);
          return $http({
                method : "POST",
                url : urlConfig.basePath + urlConfig.urls.branchlist,
                data : angular.toJson(request),
                headers : { 'Content-Type': 'application/json' }
            });
        };
        
        this.getBranchStatus = function(name,seclectedoption,branchId) {
            var branchid =parseInt(branchId);
            var request ={
                 name: name,
                status: seclectedoption};
            
           // console.log(request);
          return $http({
                method : "PUT",
                url : urlConfig.basePath + urlConfig.urls.status+branchid,
                data : angular.toJson(request),
              headers : { 'Content-Type': 'application/json' }
            });
            
        };
        this.updateBranchStatus = function(seclectedoption,branchId) {
            var branchid =parseInt(branchId);
            var request ={
                 
                status: seclectedoption};
            
           // console.log(request);
          return $http({
                method : "PUT",
                url : urlConfig.basePath + urlConfig.urls.UpStatus+branchid,
                data : angular.toJson(request),
              headers : { 'Content-Type': 'application/json' }
            });
            
        };
        // getTestId
        this.delWrokSpace = function(deleteId) {
            
          return $http({
                method : "DELETE",
                url : urlConfig.basePath + urlConfig.urls.deleteworkspace+deleteId
              
               
            });
        };
        <!--invokeTest belongs to test API-->
        this.invokeTest = function(testId,finalJson) {
            // console.log(JSON.stringify(finalJson));
            // var testid =parseInt(testId);
             console.log(testId);
          return $http({
                method : "PUT",
                url : urlConfig.basePath + urlConfig.urls.test+testId+"?type=text",
              data :JSON.stringify(finalJson)
              // data : angular.toJson(finalJson),
            // headers : { 'Content-Type': 'application/json' }
              
               
            });
        };
        
        
        
        
        
        this.getBranchRevert = function() {
            var retriveid='1&userid=1';
            return $http({
                  method : "GET",
                  url : urlConfig.basePath + urlConfig.urls.branchretrive
              });
        };
        <!--getBranchRevision,delWrokSpace belongs to workspace page -->
        this.getBranchRevision = function(getid)
        {
           $("#spinLoader").show();
             var request = getid;
            // console.log(request);
          return $http({
                  method : "POST",
                  url : urlConfig.basePath + urlConfig.urls.branchRevision,
              data : angular.toJson(request),
                headers : { 'Content-Type': 'application/json' }
              });
        };
    };
    angular.module('RegionApp').service('branchService',['$http','urlConfig',branchService]);
}());
