angular.module('sPainter', ['ngRoute']).config(function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(false).hashPrefix('');
    $routeProvider.when('/', {
            templateUrl: 'view/viewHome/viewHome.html'
        });
    $routeProvider.when('/gallery', {
            templateUrl: "view/viewgallery/viewgallery.html"
        });
    $routeProvider.when('/admin', {
        templateUrl: '<h1>This is administrator panel</h1>'
    });
});