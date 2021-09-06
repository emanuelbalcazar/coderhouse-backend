(function () {
    'use strict';

    var controllerId = 'nodeDlgCtrl';

    angular.module('app').controller(controllerId, ['$scope','$uibModalInstance','data', nodeDlgCtrl]);

    /**
     * Controlador del dialog de nodos.
     */
    function nodeDlgCtrl($scope, $modalInstance, data) {

        $scope.node = data;
        $scope.node.output = data.output || false;

        // Cierra la ventana del modal.
        $scope.close = function() {
            $modalInstance.dismiss('Canceled');
        };

        // Cierra el modal devolviendo los datos utilizados.
        $scope.save = function() {
            $modalInstance.close($scope.node);
        }

    } // end nodeDlg

})();