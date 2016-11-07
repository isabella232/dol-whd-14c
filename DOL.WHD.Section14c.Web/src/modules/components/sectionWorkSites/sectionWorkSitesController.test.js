describe('sectionWorkSitesController', function() {

    beforeEach(module('14c'));

    beforeEach(inject(function ($rootScope, $controller) {
        scope = $rootScope.$new();

        sectionWorkSitesController = function() {
            return $controller('sectionWorkSitesController', {
                '$scope': scope, 
                '$route': route
            });
        };
    }));

    it('invoke controller', function() {
        var controller = sectionWorkSitesController();
    });

    it('sectionWorkSitesController has clearActiveWorker', function() {
        var controller = sectionWorkSitesController();
        controller.clearActiveWorker();
    });    

    it('sectionWorkSitesController has addEmployee', function() {
        var controller = sectionWorkSitesController();
        controller.addEmployee();
    });   
    it('sectionWorkSitesController has doneAddingEmployees', function() {
        var controller = sectionWorkSitesController();
        controller.doneAddingEmployees();
    });   
    it('sectionWorkSitesController has editEmployee', function() {
        var controller = sectionWorkSitesController();
        controller.activeWorksite = { employees: [] }
        controller.editEmployee();
    });      
    it('sectionWorkSitesController has addWorkSite', function() {
        var controller = sectionWorkSitesController();
        controller.addWorkSite();
    });   
    it('sectionWorkSitesController has saveWorkSite', function() {
        var controller = sectionWorkSitesController();
        controller.saveWorkSite();
    });   
    it('sectionWorkSitesController has editWorkSite', function() {
        var controller = sectionWorkSitesController();
        controller.editWorkSite();
    });   
    it('sectionWorkSitesController has deleteWorkSite', function() {
        var controller = sectionWorkSitesController();
        controller.deleteWorkSite();
    });   
    it('sectionWorkSitesController has setActiveTab', function() {
        var controller = sectionWorkSitesController();
        controller.setActiveTab();
    });   
    it('sectionWorkSitesController has siteRowClicked', function() {
        var controller = sectionWorkSitesController();
        controller.siteRowClicked({ target: '' });
    });     
    it('sectionWorkSitesController has getDisabilityDisplay', function() {
        var controller = sectionWorkSitesController();
        controller.getDisabilityDisplay();
    });     
    it('sectionWorkSitesController has validateActiveWorksiteProperty', function() {
        var controller = sectionWorkSitesController();
        controller.validateActiveWorksiteProperty();
    });    
    it('sectionWorkSitesController has validateActiveWorkerProperty', function() {
        var controller = sectionWorkSitesController();
        controller.validateActiveWorkerProperty();
    }); 
    it('sectionWorkSitesController has validateActiveWorksiteWorker', function() {
        var controller = sectionWorkSitesController();
        controller.validateActiveWorksiteWorker();
    });                     

});