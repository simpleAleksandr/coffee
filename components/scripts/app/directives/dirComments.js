angular.module('sPainter').directive('comments', ['$templateCache','mesager', '$timeout', '$compile', '$http', function($templateCache, $timeout, mesager) {
    return {
        restrict: 'A',
        scope: true,
        templateUrl: $templateCache.get('mesager'),
        replace: false,
        link: function(scope, element, attrs) {

        }

    }

}]);
