// Start point for the Flickr Directive exercise
// http://www.forwardadvance.com/angular/directives
(function() {

  angular.module('flickr')
    .service('flickrService', FlickrService);

  function FlickrService($http) {
    this.getTag = function(tag) {
      return $http.jsonp(tagUrl(tag, {jsonpCallbackParam:'jsoncallback'}))
    }
  };

  function tagUrl(tag) {
    return [
      'http://api.flickr.com/services/feeds/photos_public.gne',
      '?tags=',
      tag,
      '&tagmode=any',
      '&format=json',
    ].join('')
  }

})();
