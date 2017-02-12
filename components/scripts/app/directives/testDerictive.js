angular.module('sPainter').directive('divcd', function () {
   return{
       restrict: 'E',
       link: function (scope, element, attrs) {
           console.log('hello')
       }
   }
});