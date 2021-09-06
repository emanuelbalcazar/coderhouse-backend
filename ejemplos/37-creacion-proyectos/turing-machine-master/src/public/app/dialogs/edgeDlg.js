(function () {
    'use strict';

    var controllerId = 'edgeDlgCtrl';

    angular.module('app').controller(controllerId, ['$scope', '$uibModalInstance', 'data', edgeDlgCtrl]);

    /**
    * Controlador del dialog de relaciones.
    */
    function edgeDlgCtrl($scope, $modalInstance, data) {

        $scope.edge = data.edge;

        // Cierra la ventana del modal.
        $scope.close = function () {
            $modalInstance.dismiss('Canceled');
        };

        // Cierra el modal devolviendo los datos utilizados.
        $scope.save = function () {
            $modalInstance.close($scope.edge);
        }

    } // end edgeDlg

})();
