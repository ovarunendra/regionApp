// import the mountebank helper library
const mbHelper = require('mountebank-helper');

// create the skeleton for the imposter (does not post to MB)
const firstImposter = new mbHelper.Imposter({ 'imposterPort' : 3000 });

// construct sample responses and conditions on which to send it
const greeting = {
  'uri' : '/api/v1/variants',
  'verb' : 'GET',
  'res' : {
    'statusCode': 200,
    'responseHeaders' : { 'Content-Type' : 'application/json' , 'Access-Control-Allow-Origin': 'http://localhost:8080' },
    'responseBody' : JSON.stringify({
      "count": 23,
    "totalMetric": "1 seconds.",
	  "returnType": "Variant"
      "varaints": [
        {
          "dictionary": "CMBodyParts",
          "variantId": 3660,
          "varString": "articulationes metatarsophalangeae",
          "dictType": null,
        "actions": [
			"Add",
			"Delete"
		  ],
          "props": [
            {
              "name": "ncid",
              "value": "15426597"
            },
            {
              "name": "cui",
              "value": "C0025589"
            },
            {
              "name": "tui",
              "value": "T030"
            }
          ]
        },
        {
          "dictionary": "CMBodyParts",
          "variantId": 3661,
          "varString": "joint metatarsal",
          "dictType": null,
          "props": [
            {
              "name": "ncid",
              "value": "15426597"
            },
            {
              "name": "cui",
              "value": "C0025589"
            },
            {
              "name": "tui",
              "value": "T030"
            }
          ]
        }
      ]
    })
  }
};

const branch = {
  'uri' : '/api/v1/branches/',
  'verb' : 'GET',
  'res' : {
    'statusCode': 200,
    'responseHeaders' : { 'Content-Type' : 'application/json' , 'Access-Control-Allow-Origin': 'http://localhost:8080' },
    'responseBody' : JSON.stringify([{"name":"PBI-2345","username":"Zhendong Chen","createdOn":"2016/12/10","lastUpdatedOn":"2016/12/10","revisionCount":20,"srcReleaseNumber":2341},
     {
      "releaseid": 1,
      "name": "branch1",
      "lastUpdatedOn": null,
      "id": 1,
      "type": 1,
      "createdOn": "2016-11-20 13:44:37.0",
      "userid": 1,
      "status": 1
    }])}
};
const branchRevison = {
  'uri' : '/api/v1/branch/',
  'verb' : 'GET',
  'res' : {
    'statusCode': 200,
    'responseHeaders' : { 'Content-Type' : 'application/json' , 'Access-Control-Allow-Origin': 'http://localhost:8080' },
    'responseBody' : JSON.stringify([{'name':'PBI-2345','username':'Zhendong Chen','date':'2016/13/10','revisionCount':20,'srcBranchNumber':2341},{'name':'PBI-2345 ','username':'Zhendong Chen','date':'2016/14/10','revisionCount':10,'srcBranchNumber':3451},{'name':'PBI-2345','username':'Zhendong Chen','date':'2016/15/10','revisionCount':10,'srcBranchNumber':8901},{'name':'PBI-2345','username':'Zhendong Chen','date':'2016/16/10','revisionCount':10,'srcBranchNumber':1234},{'name':'PBI-2345','username':'Zhendong Chen','date':'2016/17/10','revisionCount':10,'srcBranchNumber':2345},{'name':'PBI-2345','username':'Zhendong Chen','date':'2016/18/10','revisionCount':10,'srcBranchNumber':2231}])
    }
};


// add our responses to our imposter
firstImposter.addRoute(branch);
firstImposter.addRoute(greeting);
firstImposter.addRoute(branchRevison);


// start the MB server  and post our Imposter to listen!
mbHelper.startMbServer(2525)
.then(function() {
  firstImposter.postToMountebank()
  .then( () => {
  console.log('Imposter Posted! Go to http://localhost:3000');
  });
});
