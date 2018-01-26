describe('userLoginPageController', function() {
  var scope, userLoginPageController;
  var $q, scope, mockapiService, mockLocation, formVals;
  var userLoginPageController, userRegister, emailVerification;
  beforeEach(module('14c'));

  beforeEach(
    inject(function(
      $rootScope,
      $controller,
      _$q_,
      apiService,
      $location
    ) {
      $q = _$q_;
      scope = $rootScope.$new();
      mockapiService = apiService;
      mockLocation = $location;
      formVals = {
        email: "test@tst.com",
        firstName: "A",
        lastName: "B"
      }
      userLoginPageController = function() {
        return $controller('userLoginPageController', {
          $scope: scope,
          apiService: mockapiService,
          $location: mockLocation
        });
      };

      emailVerification = $q.defer();
      spyOn(mockapiService, 'emailVerification').and.returnValue(
        emailVerification.promise
      );
    })
  );

  it('invoke controller', function() {
    var controller = userLoginPageController();
    expect(controller).toBeDefined();
  });

  it('call email verification when code and userId are present', function() {
    spyOn(mockLocation, 'search').and.returnValue({
      code: 'code',
      userId: 'userId'
    });
    var controller = userLoginPageController();
    scope.$apply();

    expect(scope.isEmailVerificationRequest).toBe(true);
  });

  it('email verification success should show email verified message', function() {
    spyOn(mockLocation, 'search').and.returnValue({
      code: 'code',
      userId: 'userId'
    });
    var controller = userLoginPageController();
    emailVerification.resolve();
    scope.$apply();

    expect(scope.emailVerified).toBe(true);
  });

  it('email verification error should show error message', function() {
    spyOn(mockLocation, 'search').and.returnValue({
      code: 'code',
      userId: 'userId'
    });
    var controller = userLoginPageController();
    emailVerification.reject({});
    scope.$apply();

    expect(scope.emailVerificationError).toBe(true);
  });

  it('email verification error should show error message, log details', function() {
    spyOn(mockLocation, 'search').and.returnValue({
      code: 'code',
      userId: 'userId'
    });
    var controller = userLoginPageController();
    emailVerification.reject({ data: { error: 'test' } });
    scope.$apply();

    expect(scope.emailVerificationError).toBe(true);
  });
});
