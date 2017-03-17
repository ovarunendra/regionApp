describe('Branch Service', function () {
    var branchService, $httpBackend;
    beforeEach(module('RCFApp'));
    beforeEach(inject(function ($injector) {
        branchService = $injector.get('branchService');
        httpBackend = $injector.get('$httpBackend');
    }));

    it('It should call the correct URL to get the branch list', function () {
        var returnValue = [];
        var result;
        $httpBackend.expect('GET', 'http://localhost:3000/api/v1/branch/all').respond(returnValue);
        branchService.getBranchList().then(function (response) {
            result = response.data;
        });
        $httpBackend.flush();
        expect(result).toEqual([]);
    });

    it('It should call the correct URL to get Branches', function () {
        var returnValue = [];
        var result;
        $httpBackend.expect('POST', 'http://localhost:8585/api/v1/branch/').respond(returnValue);
        branchService.getBranches().then(function (response) {
            result = response.data;
        });
        $httpBackend.flush();
        expect(result).toEqual([]);
    });

    it('It should call the correct URL to ge tBranch Revision', function () {
        var returnValue = [];
        var result;
        $httpBackend.expect('GET', 'http://localhost:3000/api/v1/branch/').respond(returnValue);
        branchService.getBranchRevision('124456').then(function (response) {
            result = response.data;
        });
        $httpBackend.flush();
        expect(result).toEqual([]);
    });

});