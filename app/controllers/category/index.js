angular.module('loader')

    .controller('CategoryCtrl', function ($scope, $interval, $location) {
        $interval(function () {
            $scope.value = Math.round(1000 * Math.random());
        }, 1000);

        $scope.category = $location.param('category');
    })
;
