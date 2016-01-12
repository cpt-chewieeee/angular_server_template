'use strict';

describe('Controller: AdminTestCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var AdminTestCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AdminTestCtrl = $controller('AdminTestCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AdminTestCtrl.awesomeThings.length).toBe(3);
  });
});
