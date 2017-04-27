// Start point for the Flickr Directive exercise
// http://www.forwardadvance.com/angular/directives

angular.module('app', ['flickr'])
  .config(function($sceDelegateProvider) {
    $sceDelegateProvider.resourceUrlWhitelist([ 'self', '**' ]);
  });

angular.module('flickr', []);
