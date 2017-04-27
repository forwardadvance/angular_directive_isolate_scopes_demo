// Scope is a tree
// Isolate scope creates a new scope, not attached to the tree
// Uses of isolate scope
// Don't use isolate scope inappropriately
// Create an isolate scope
// Isolate scope only applies to the template, not the transclusion
// * Isolate scope '@' lets us set to a value
// @ accepts an expression. This creates a one way binding
// = lets us bind to a value in the parent scope.
// =value will bind to an arbitrary value
// & lets us call a function on the parent $scope




angular.module('app', [])
  .controller('cheeseController', function($scope) {
    $scope.cheese="Gouda"
    $scope.handleEat = (data) => {
      console.log('val', data)
      $scope.cheese = data
    }
  })

  .directive('cheeseView', function() {
    return {
      template: `
        <input ng-model='cheese' />{{cheese}}
        <button ng-click="handleEat()">eat the {{cheese}}</button>
      `,
      scope: {
        cheese: '<',
        onEat: '&'
      },
      controller: function($scope) {
        $scope.handleEat = () => {
          if ($scope.onEat) {
            $scope.onEat({cheese:$scope.cheese});
          }
        }
      }
    }
  });







// angular.module('app', [])
//   .controller('cheeseController', function($scope) {
//     // $scope.cheese="Gouda"
//     $scope.sayHello = function() {
//       alert('hello');
//     }
//   })
//   .directive('cheeseView', function() {
//     return {
//       template: `
//         <input ng-model='cheese' />
//         {{cheese}}
//         <button ng-click="onLike()">like</button>
//       `,
//       scope: {
//         cheese: '=',
//         onLike: '&'
//       }
//     }
//   });

















// Initial state
// angular.module('app', [])
//   .controller('cheeseController', function($scope) {
//     $scope.cheese="Gouda"
//   })
//   .directive('cheeseView', function() {
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
