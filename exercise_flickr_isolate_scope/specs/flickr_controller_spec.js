describe('FlickrController', function() {

  beforeEach(module('app'));

  var controllerService, scope, httpBackend;
  beforeEach(inject(function($controller, $rootScope, $httpBackend) {
    scope = $rootScope.$new();
    httpBackend = $httpBackend;
    controllerService = $controller;
  }));

  describe('getting the weather', function() {

    var dummyResponse = {feed: []};

    beforeEach(function() {
      httpBackend.expectJSONP(/.*flickr.*/).respond(dummyResponse);
      // httpBackend.when("JSONP", /.*flickr.*/).respond(dummyResponse);
      controllerService('FlickrController', {$scope: scope});
      scope.getFeed()
      // scope.getFeed();
      httpBackend.flush();
    });

    it('should have weather', function() {
      expect(scope.feed).toEqual(dummyResponse);
    });
  });

});
