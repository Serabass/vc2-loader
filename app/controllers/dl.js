angular.module('loader')

    .controller('DlCtrl', function ($scope, $interval) {
        $interval(function () {
            $scope.value = Math.round(1000 * Math.random());
        }, 1000);
    })
;
