describe('Region Search Service', function () {
     var regionSearchService, $httpBackend;
    var urlConfig ;
     var branches = {
        "data":
        {
        "branches": [
            {
                "branchId": 149,
                "releaseId": 1,
                "name": "Manoj Final",
                "lastUpdatedOn": null,
                "createdOn": "2016-12-20 21:42:39.0",
                "userId": 1,
                "status": "active" 
            },
            {
               "branchId": 148,
                "releaseId": 1,
                "name": "Test",
                "lastUpdatedOn": null,
                "createdOn": "2016-12-20 21:26:06.0",
                "userId": 1,
                "status": "active"  
            }
        ]
        }
    }
    var results = {
        "data":
        {
         "regions": [

    {

      "dictionary": "CMBodyParts",
      "regionId": 38662,
      "varString": "calf",
      "actions": [
        "Add",
        "Delete"
      ],
      "props": [
        {
          "name": "tui",
          "value": "T029"
        },
        {
          "name": "tui",
          "value": "T023"
        },
        {
          "name": "cui",
          "value": "C0230445"
        },
        {
          "name": "ncid",
          "value": "12065"
        },
        {
          "name": "cui",
          "value": "C1305418"
        },
        {
          "name": "ncid",
          "value": "15438390"
        }
      ]
    },
    {

      "dictionary": "CMBodyParts",
      "regionId": 38663,
      "varString": "calf of leg",
      "actions": [
        "Add",
        "Delete"
      ],
      "props": [
        {
          "name": "tui",
          "value": "T029"
        },
        {
          "name": "cui",
          "value": "C0230445"
        },
        {
          "name": "ncid",
          "value": "12065"
        }
      ]
         }]
    }
    }

   beforeEach(module('RegionApp'));
   beforeEach(inject(function(_regionSearchService_,_$httpBackend_,_urlConfig_)
    {
      regionSearchService = _regionSearchService_;
      $httpBackend = _$httpBackend_;
      urlConfig = _urlConfig_;
    }));

    it('it Should return Empty Array', function () {
      var returnData = [];
       $httpBackend.when('GET',urlConfig.basePath + urlConfig.urls.regionSearch + "nonexist&value=nonexist").respond(200,returnData);
        regionSearchService.serach("nonexist","nonexist").then(function (response) {
            result = response.data;
        });
        $httpBackend.flush();
        expect(result).toEqual([]);
    });

    it('it Should return matched search region', function () {
      var _result;
       for(i = 0; i < results.data.regions.length ; i++)
        {
           for(j=0; j < results.data.regions[i].props.length; j++)
           {
               if(results.data.regions[i].props[j].name == "cui" && results.data.regions[i].props[j].value == "C1305418")
               {
                   _result = results.data.regions[i];
               }
           }
        }

       $httpBackend.when('GET',urlConfig.basePath + urlConfig.urls.regionSearch + "cui&value=C1305418").respond(200,_result);
        regionSearchService.serach("cui","C1305418").then(function (response) {
            result = response.data;
        });
        $httpBackend.flush();
        expect(result.regionId).toEqual(38662);
    });

    it('Add new region', function () {
        var result;
        var region =  results.data.regions[results.data.regions.length-1];
        var id = parseInt(region.regionId) + 1;
        region.regionId = id;
        $httpBackend.when('POST', urlConfig.basePath + urlConfig.urls.regionUpdate).respond(200,region);
        /*regionSearchService.performVaientAction(149,region,"Add").then(function (response) {
            result = response.data;
        });*/
        $httpBackend.flush();
        expect(result.regionId).toEqual(id);
    });

     it('Get branch to edit', function () {
        var result;
        var branchId = 148;
        for(i = 0; i < branches.data.branches.length ; i++)
        {
            if(branches.data.branches[i].branchId == branchId)
            {
                result = branches.data.branches[i];
            }
        }
        $httpBackend.when('GET', urlConfig.basePath + urlConfig.urls.edit+branchId).respond(200,result);
        regionSearchService.editList(148).then(function (response) {
            result = response.data;
        });
        $httpBackend.flush();
        expect(result.branchId).toEqual(148);
    });
    
});
