var app = angular.module('app', [
    'ngRoute',
    'ngCookies',
    'ngAnimate',
    'ngSanitize',
    'ui.bootstrap',
    'toastr',
    'dialogs.main',
    'dialogs.default-translations',
    'navbar',
    'ngTable',
    'pascalprecht.translate'
]);

// rest routes that are not protected.
app.constant('API', 'api');

// run angularJS...
app.run(['$rootScope', '$route', '$window', function ($rootScope, $route, $window) {
    $rootScope.title = "Fundamentos";

    $rootScope.back = function () {
        $window.history.back();
    };

    $rootScope.redirectTo = function (url) {
        $window.location = !url.match(/^#/) ? '#' + url : url;
    };
}]);

// configure $locationProvider..
app.config(['$locationProvider', function ($locationProvider) {
    $locationProvider.hashPrefix('');
}]);

// configure toastr
app.config(function (toastrConfig) {
    angular.extend(toastrConfig, {
        autoDismiss: false,
        containerId: 'toast-container',
        maxOpened: 2,
        newestOnTop: true,
        positionClass: 'toast-bottom-right',
        preventDuplicates: false,
        preventOpenDuplicates: false,
        target: 'body'
    });
});

// configure angular dialogs service
app.config(['dialogsProvider', '$translateProvider', function (dialogsProvider, $translateProvider) {
    dialogsProvider.setSize('sm');

    $translateProvider.translations('es-ES', {
        DIALOGS_YES: "Si"
    });

    $translateProvider.preferredLanguage('es-ES');
    $translateProvider.useSanitizeValueStrategy('sanitize');
}]);
