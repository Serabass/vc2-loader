var app = angular.module('loader', [
        'ngRoute'
    ])
    .config(function ($routeProvider) {
        $routeProvider.when('/news', {
                controller: 'NewsCtrl',
                templateUrl: 'templates/news.html',
                animation: 'fade'
            })
            .when('/dl', {
                controller: 'DlCtrl',
                templateUrl: 'templates/dl.html',
                animation: 'fade'
            })
            .when('/contacts', {
                controller: 'ContactsCtrl',
                templateUrl: 'templates/contacts.html',
                animation: 'fade'
            })
            .when('/settings', {
                controller: 'ContactsCtrl',
                templateUrl: 'templates/settings.html',
                animation: 'fade'
            })



            .when('/general/new-releases', {
                controller: 'ReleasesCtrl',
                templateUrl: 'templates/general/new-releases.html',
                animation: 'fade'
            })
            .when('/general/work', {
                controller: 'WorkCtrl',
                templateUrl: 'templates/general/work.html',
                animation: 'fade'
            })
            .when('/general/popular', {
                controller: 'PopularCtrl',
                templateUrl: 'templates/general/popular.html',
                animation: 'fade'
            })



            .when('/category/:category', {
                controller: 'CategoryCtrl',
                templateUrl: 'templates/category/index.html',
                animation: 'fade'
            })
        ;
    });
