angular.module('app').controller('machineListCtrl', ['$scope', '$location', 'NgTableParams', 'dialogs', 'toastr', 'machineSrv', machineListCtrl]);

function machineListCtrl($scope, $location, NgTableParams, dialogs, logger, service) {

    $scope.records = [];

    var initialParams = { page: 1, count: 10 };

    var initialSettings = {
        getData: function (params) {
            return new Promise((resolve, reject) => {
                service.searchByPage(null, $scope.tableParams.page(), $scope.tableParams.count(), function (error, results) {
                    $scope.records = results.docs;
                    params.total(results.total);
                    resolve(results.docs);
                });
            });
        }
    };

    $scope.tableParams = new NgTableParams(initialParams, initialSettings);

    $scope.edit = function (machine) {
        $location.path('/machines/' + machine._id);
    };

    // remove a extraction query by id.
    $scope.remove = function (machine) {
        dialogs.confirm('Confirmación', '¿Está seguro que desea eliminar la maquina "' + machine.name + '"?', { size: 'md' }).result.then(
            function () {
                service.remove(machine._id, function (error, result) {
                    if (error)
                        return logger.error('No se pudo eliminar la maquina');

                    logger.success('Se elimino la maquina');
                    $scope.tableParams.reload();
                });
            }, function () {
                // nothing to do.
            }
        );
    };
}
