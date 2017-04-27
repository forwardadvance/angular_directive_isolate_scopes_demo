angular.module('app', ['flickr']);

(function() {

  angular.module('flickr', [])
    .constant('flickrBase', 'http://api.flickr.com/services/feeds/photos_public.gne')
    .config(function($sceDelegateProvider) {
      $sceDelegateProvider.resourceUrlWhitelist([ 'self', '**' ]);
    })
    .directive('flickr', function() {
      var directive = {
        template: template,
        controller: Controller,
        restrict: "E",
        scope: {
          tag: '='
        }
      }
      return directive;
    })
    .service("flickrService", Service);

  function Service($http, flickrBase) {
    this.getByTag = function(tag) {
      var url = [
        flickrBase,
        '?tags=',
        tag,
        '&tagmode=any&format=json'
      ].join('');
      return $http.jsonp(url, {jsonpCallbackParam:'jsoncallback'})
        .then(function(response) {
          return response.data.items;
        });
    };
  }

  function Controller($scope, flickrService) {
    $scope.tag = "";
    var showSpinner = function() {
      $scope.spinner = true;
    }
    var hideSpinner = function() {
      $scope.spinner = false;
    }
    var showError = function() {
      $scope.error = true;
    }
    $scope.get = function(tag) {
      if (tag) {
        flickrService.getByTag(tag)
          .then(function(data) {
            $scope.feed = data;
          })
          .catch((data) => {
            showError() 
          })
          .then(hideSpinner);
      }
    }
    showSpinner();
    $scope.$watch('tag', $scope.get);
  };

  var template = `
    {{tag}}
    <ul>,
      <li ng-repeat="item in feed">,
        <a href="{{item.link}}">,
          <img ng-src="{{item.media.m}}" />,
        </a>,
      </li>,
    </ul>
  `

})();
