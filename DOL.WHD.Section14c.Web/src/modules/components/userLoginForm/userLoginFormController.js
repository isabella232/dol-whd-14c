'use strict';

module.exports = function(ngModule) {
  ngModule.controller('userLoginFormController', function(
    $rootScope,
    $scope,
    $location,
    $route,
    stateService,
    authService,
    apiService
  ) {
    'ngInject';
    'use strict';

    var vm = this;
    vm.stateService = stateService;
    vm.loginError= {
      status: false,
      message: ''
    };
    vm.formTitle ='Log in';
    vm.submitButtonName ='Log in';
    vm.resendAuthCodeTitle = 'Resend authentication code'
    vm.twoFAStatus = false;

    $scope.formVals = {
      email: '',
      pass: '',
      code: ''
    };

    $scope.inputType = 'password';

    $scope.onSubmitClick = function() {
      vm.submittingForm = true;
      stateService.user.loginEmail = $scope.formVals.email;

      vm.clearError();
      //  Call Token Service
      authService.userLogin($scope.formVals.email, $scope.formVals.pass, $scope.formVals.code).then(
        function() {
          vm.submittingForm = false;
          if(stateService.user.organizations.length) {
            $location.path("/dashboard");
          }
          else if ($location.path() === '/employerRegistration') {
            $route.reload();
          } else {
            $location.path("/employerRegistration");
          }
        },
        function(error) {
          handleError(error);
          vm.submittingForm = false;
        }
      );
    };

    var handleError = function(error) {
      if (error.data && error.data.error_description === 'Password expired') {
        stateService.user.passwordExpired = true;
        $location.path('/changePassword');
        $scope.$apply();
      }


      if (error.status === 400) {
        if(error.data.error === 'locked_out'){
          vm.loginError.status = true;
          // update error message
          vm.loginError.message = error.data.error_description
        }
        else if (error.data.error === 'need_code') {
          vm.twoFAStatus = true;
          vm.submitButtonName ='Verify';
          vm.formTitle ="Enter code";
          vm.loginError.status = false;
          vm.clearError();
        } else {
          vm.loginError.status = true
          vm.loginError.message =  error.data.error_description
        }
      } else {
        // catch all error, currently possible to get a 500 if the database server is not reachable
        vm.loginError.status = true
        vm.unknownError = true;
      }
    };

    this.clearError = function() {
      vm.loginError= {
        status: false,
        message: ''
      };
      vm.unknownError = false;
    };

    $scope.forgotPassword = function() {
      $location.path('/forgotPassword');
    };

    $scope.resendAuthCode = function() {

      apiService.sendAuthenticationCode(stateService.access_token, $scope.formVals.email).then(function(){
        vm.resendAuthCodeTitle ="New authentication code send";
      }).catch(function(error) { handleError(error) });
    };

    $scope.hideShowPassword = function() {
      if ($scope.inputType === 'password') $scope.inputType = 'text';
      else $scope.inputType = 'password';
    };
  });
};
