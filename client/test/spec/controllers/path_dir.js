'use strict';

describe('Controller: PathDirCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var PathDirCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PathDirCtrl = $controller('PathDirCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PathDirCtrl.awesomeThings.length).toBe(3);
  });
});
