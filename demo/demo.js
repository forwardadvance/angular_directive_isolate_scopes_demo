// Scope is a tree
// Isolate scope creates a new scope, not attached to the tree
// Uses of isolate scope
// Don't overuse isolate scope
// Create an isolate scope
// Isolate scope only applies to the template, not the transclusion
// * Isolate scope '@' lets us set to a value
// @ accepts an expression. This creates a one way binding
// = lets us bind to a value in the parent scope.
// =value will bind to an arbitrary value



angular.module('app', [])
  .controller('cheeseController', function($scope) {
    $scope.cheese="Gouda"
  })
  .directive('cheeseDirective', function() {
    return {
      scope: {
        cheese: '=myCheese'
      },
      template: "Hello from the Cheese Directive: <input ng-model='cheese' />{{cheese}}"
    }
  });

















// Initial state
// angular.module('app', [])
//   .controller('cheeseController', function($scope) {
//     $scope.cheese="Gouda"
//   })
//   .directive('myDirective', function() {
//     return {
//       template: "<input ng-model='cheese' />{{cheese}}"
//     }
//   });





// @ will pull a value from an attribute
//
// angular.module('app', [])
//   .controller('myController', function($scope) {
//     // $scope.test="Cats with Hats"
//   })
//   .directive('myDirective', function() {
//     return {
//       scope: {cheese: '@'},
//       template: "<input ng-model='cheese' />{{cheese}}"
//     }
//   });


// = will bind a value to the parent scope.
// When the parent scope updates, the child updates

// angular.module('app', [])
//   .directive('repeat', function() {
//     return {
//       scope: {
//         cheese: '='
//       },
//       template: "<input ng-model='cheese' />{{cheese}}"
//     }
//   });


// Initial state
// angular.module('app', [])
//   .controller('cheeseController', function($scope) {
//     $scope.cheese="Gouda"
//   })
//   .directive('cheeseDirective', function() {
//     return {
//       scope: true,
//       // template: "Hello from the Cheese Directive: <input ng-model='cheese' />{{cheese}}"
//     }
//   });
