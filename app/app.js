var app = angular.module('loader', [
        'ngRoute'
    ])
    .config(function ($routeProvider) {
        $routeProvider.when('/news', {
                controller: 'NewsCtrl',
                templateUrl: 'templates/news.html'
            })
            .when('/downloads', {
                controller: 'DlCtrl',
                templateUrl: 'templates/dl.html'
            })
            .when('/contacts', {
                controller: 'ContactsCtrl',
                templateUrl: 'templates/contacts.html'
            })
            .when('/settings', {
                controller: 'ContactsCtrl',
                templateUrl: 'templates/settings.html'
            })



            .when('/general/new-releases', {
                controller: 'ReleasesCtrl',
                templateUrl: 'templates/general/new-releases.html'
            })
            .when('/general/work', {
                controller: 'WorkCtrl',
                templateUrl: 'templates/general/work.html'
            })
            .when('/general/popular', {
                controller: 'PopularCtrl',
                templateUrl: 'templates/general/popular.html'
            })



            .when('/category/:category', {
                controller: 'CategoryCtrl',
                templateUrl: 'templates/category/index.html'
            })
        ;
    });
