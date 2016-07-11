var app;
(function (app) {
    angular
        .module('app', [
        'ui.router'
    ])
        .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider.state('default', {
            url: '/',
            controller: function () { },
            controllerAs: '$ctrl',
            template: "<div class=\"default-container\">\n                    <product-list></product-list>\n                    <cart-product-list></cart-product-list>\n                </div>"
        });
        $urlRouterProvider.otherwise('/');
    });
})(app || (app = {}));
