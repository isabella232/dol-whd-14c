describe('accountGrid', function() {

    beforeEach(module('14c'));

    var element, rootScope;
    beforeEach(function () {
        element = angular.element('<account-grid/>');
    	inject(function ($rootScope, $compile) {
            rootScope = $rootScope;
			//$compile(element)(rootScope);
			rootScope.$digest();
        });
    });

    it('invoke directive', function() {
        // compiled in init.
    });
});