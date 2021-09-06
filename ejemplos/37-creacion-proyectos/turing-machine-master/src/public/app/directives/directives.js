(function () {
    'use strict';

    var app = angular.module('app');

    /**
     * Directiva de manipulacion de grafos 2D.
     * Uso: <vis-network data="data" options="options" events="events"></vis-network>
     */
    app.directive('angularVis', [function () {

        return {
            restrict: 'E',
            scope: {
                data: '=',
                options: '=',
                events: '='
            },
            link: function ($scope, $element, $attrs, ngModel) {

                var network = null;
                var events = ['click', 'doubleClick'];

                $scope.$watch('data', function () {

                    // Creo el objeto que contiene los datos y opciones de manipulacion de grafos.
                    network = new vis.Network($element[0], $scope.data, $scope.options);
                    network.redraw();
                    network.editEdgeMode();

                    // Registro los posibles eventos en el network para su ejecucion.
                    angular.forEach($scope.events, function (callback, event) {
                        if (events.indexOf(event) >= 0) {
                            network.on(event, callback);
                        }
                    });
                });

                // Seteo las opciones de visualizacion en el network.
                $scope.$watchCollection('options', function (options) {
                    if (network != null) {
                        network.setOptions(options);
                        network.redraw();
                    }
                });

            } // fin link
        }; // fin return
    }]); // fin directiva

    /**
     * Directiva para realizar una accion al presionar Enter.
     */
    app.directive('onEnter', function () {
        return function (scope, element, attrs) {
            element.bind("keydown keypress", function (event) {
                if (event.which === 13) {
                    $(attrs.onEnter).focus();
                }

            });
        };
    });

})();
