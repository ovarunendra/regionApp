describe('Branch Service', function () {
    var branchService, httpBackend;
    beforeEach(module('RCFApp'));
    beforeEach(inject(function($injector){
        branchService = $injector.get('branchService');
        httpBackend =  $injector.get('$httpBackend');
    }));

    it('it Should return Empty Branch Array', function () {
        var returnData = [];
        httpBackend.expectGET("http://localhost:3000/api/v1/branch/all").respond(returnData);
        var returnedPromise = branchService.getBranchList();
        var result;
        returnedPromise.then(function (response) {
            result = response.data;
        });
        httpBackend.flush();
        expect(result).toEqual([]);
    });

    it('it Should return BranchArry Branch Array', function () {
        var returnData = [{"name":"PBI-2345","username":"Zhendong Chen","createdOn":"2016/12/10","lastUpdatedOn":"2016/12/10","revisionCount":20,"srcReleaseNumber":2341},{"name":"PBI-2346 ","username":"Mark Hampton","createdOn":"2016/12/10","lastUpdatedOn":"2016/12/10","revisionCount":10,"srcReleaseNumber":3451},{"name":"PBI-2347","username":"Muhhamad choudary","createdOn":"2016/12/10","lastUpdatedOn":"2016/12/10","revisionCount":10,"srcReleaseNumber":8901},{"name":"PBI-2348","username":"Pranay","createdOn":"2016/12/10","lastUpdatedOn":"2016/12/10","revisionCount":10,"srcReleaseNumber":1234},{"name":"PBI-2349","username":"Pavan","createdOn":"2016/12/10","lastUpdatedOn":"2016/12/10","revisionCount":10,"srcReleaseNumber":2345},{"name":"PBI-2350","username":"Siril","createdOn":"2016/12/10","lastUpdatedOn":"2016/12/10","revisionCount":10,"srcReleaseNumber":2231}];
        httpBackend.expectGET("http://localhost:3000/api/v1/branch/all").respond(returnData);
        var returnedPromise = branchService.getBranchList();
        var result;
        returnedPromise.then(function (response) {
            result = response.data;
        });
        httpBackend.flush();
        expect(result).toEqual(returnData);
    });

    it('it Should return Empty Branch Revision Array', function () {
        var returnData = [];
        httpBackend.expectGET("http://localhost:3000/api/v1/branch/").respond(returnData);
        var returnedPromise = branchService.getBranchRevision("nonexist");
        var result;
        returnedPromise.then(function (response) {
            result = response.data;
        });
        httpBackend.flush();
        expect(result).toEqual([]);
    });

    it('it Should return Branch Revision', function () {
        var returnData = [{'name':'PBI-2345','username':'Zhendong Chen','date':'2016/13/10','revisionCount':20,'srcBranchNumber':2341},{'name':'PBI-2345 ','username':'Zhendong Chen','date':'2016/14/10','revisionCount':10,'srcBranchNumber':3451},{'name':'PBI-2345','username':'Zhendong Chen','date':'2016/15/10','revisionCount':10,'srcBranchNumber':8901},{'name':'PBI-2345','username':'Zhendong Chen','date':'2016/16/10','revisionCount':10,'srcBranchNumber':1234},{'name':'PBI-2345','username':'Zhendong Chen','date':'2016/17/10','revisionCount':10,'srcBranchNumber':2345},{'name':'PBI-2345','username':'Zhendong Chen','date':'2016/18/10','revisionCount':10,'srcBranchNumber':2231}];
        httpBackend.expectGET("http://localhost:3000/api/v1/branch/").respond(returnData);
        var returnedPromise = branchService.getBranchRevision("C0009039");
        var result;
        returnedPromise.then(function (response) {
            result = response.data;
        });
        httpBackend.flush();
        expect(result).toEqual(returnData);
    });
});
