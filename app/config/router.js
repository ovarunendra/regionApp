'use strict';
(function() {
  angular.module('RegionApp').config(['$routeProvider' , function ($routeProvider) {
    $routeProvider
    .when('/newsearch', {
        template: require('./../uiModule/region_search/region_search_content.html'),
        controller: 'regionSearchController',
        controllerAs: 'RegionApp',
        requireLogin: true
      })
    .when('/branchList', {
			template : require('./../uiModule/branch_list/branch_list.html'),
			controller : 'branchListController',
			controllerAs : 'RegionApp',
			requireLogin : true
		})
      
    .otherwise({
        redirectTo: '/branchList'
      });
   }]).run(['$rootScope', '$location', 'sessionService',
        function ($rootScope, $location, sessionService)
  {

   }]);
  }());
