
angular.module('loader')
    .run(function ($rootScope, $location) {
        $rootScope.getCurrentPath = function () {
            return $location.path();
        };

        $rootScope.topLinks = require('../config/app/top-links');

        $rootScope.sidebar = require('../config/app/sidebar');

        $rootScope.setActive = function (el) {
            $rootScope.active = el;
        };

        $rootScope.active = null;
    });
