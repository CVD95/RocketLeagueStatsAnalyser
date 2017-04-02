describe('MatchController', function() {
    var scope;
    var ctrl;

    beforeEach(function() {
        module('rlStatsAnalyserApp');
    });

    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        ctrl = $controller('MatchController', {
            $scope: scope
        });
    }));

    it('should instantiate', function() {
        expect(ctrl).toBeDefined();
    });

    it('should get the variable page title', function() {
        expect(scope.pageTitle).toEqual('Matches');
    });

    it('should return the max id of array', function() {
        var testarray = [{id: "1"},{id: "2"},{id: "3"},{id: "4"},{id: "6"},{id: "5"}];
        expect(scope.getMaxId(testarray)).toBe(6);
    });
    
});
