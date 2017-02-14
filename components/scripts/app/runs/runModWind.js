angular.module('sPainter').run(['$templateCache', function ($templateCache) {
    $templateCache.put('mesager', "view/viewformsend/viewformsend.html");


}]);

angular.module('sPainter').value('mesager', 'mesager');