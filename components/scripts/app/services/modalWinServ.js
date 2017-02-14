angular.module('sPainter').service('$comment', ['$compile', '$timeout', '$rootScope', function ($compile, $timeout, $rootScope) {
    return function (template) {
        var $comment = angular.element('<div comments="'+template+'"></div><div class="com"></div>');
        angular.element(document.body).append($comment);
        $timeout(function() {
            var newScope = $rootScope.$new(true);
            $compile($comment)(newScope);
        });
    }
}]);