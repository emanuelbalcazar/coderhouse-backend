angular.module('app').controller('navbarCtrl', ['$scope', '$location', navbarCtrl]);

// navbar controller
function navbarCtrl($scope, $location) {
    $scope.redirectTo = function (route) {
        $location.path(route);
    };
}
