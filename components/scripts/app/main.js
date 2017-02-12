angular.module('sPainter', ['ngRoute']).config(function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(false).hashPrefix('');
    $routeProvider.when('/', {
            templateUrl: 'view/viewHome/viewHome.html'
        });
    $routeProvider.when('/gallery', {
            templateUrl: "view/viewgallery/viewgallery.html"
        });
    $routeProvider.when('/send', {
            templateUrl: 'view/viewformsend/viewformsend.html'
        });
});