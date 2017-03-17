'use strict';
(function() {
	var config = {
		//--- APIBackend ---> basepath(8585) &(region-content-portal) are used to hit backend, we user(region-content-portal) while generating dist files as backend team need. No more mockpath using now.
        basePath : 'http://localhost:8587',
		//	  basePath : "http://localhost:8081" + "/rapid-content-region-portal",
		//basePath : "http://" + window.location.host + "/rapid-content-region-portal",
		//mockPath : 'http://localhost:3000',
		//	  basePath : 'http://localhost:3000',
		//--- APIend ----------->
		urls : {

			//--- start Search page
			regionUses : '/api/v1/regionuses?limit=100',//GET
			regionTitles : '/api/v1/regiontitles?limit=100',//GET
			normalizedRegionTitles : '/api/v1/normalizedregiontitles?limit=417',//GET
			regionUsesPost : '/api/v1/regionuses',//POST
			regionTitlesPost : '/api/v1/regiontitles',//POST
			normalizedRegionTitlesPost : '/api/v1/normalizedregiontitles',//POST
			regionSearch : '/api/v1/regions?key=',//GET
			//editedRegions : '/api/v1/editedregions?branchId=',//GET
			saveEditedRegionsPost : '/api/v1/regions',//POST
			saveDeletedRegionsPost : '/api/v1/regions',//POST
            branchlist : '/api/v1/branches/',
			branchretrive : '/api/v1/branches/?userid=1',
			status : '/api/v1/branches/',
			edit : '/api/v1/edits/?branchId=',//get
			getrelease : '/api/v1/branches/ready?userId=1',
			UpStatus : '/api/v1/branches/',
			//-- end
            //-- mapping
            
            
            mappingRegionUse : '/api/v1/regionuses',//get
        normalizedRegUse : '/api/v1/regionuses/',
            regionFilter : '/api/v1/regiontitles?key=regiontitle&value=',
            regionsSave  : '/api/v1/regions',
			login : '/login'
		}
	};
	angular.module('RegionApp').constant('urlConfig', config);
}());
