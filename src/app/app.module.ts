module app {

    angular
        .module('app',[
            'ui.router'
        ])
        .config(($stateProvider: angular.ui.IStateProvider, $urlRouterProvider: angular.ui.IUrlRouterProvider) => {

            $stateProvider.state('default', {
                url: '/',
                controller: function(){},
                controllerAs: '$ctrl',
                template: `<div>
                    <product-list></cart-product>
                    <cart-product-list></cart-product-list>
                </div>`
            });

            $urlRouterProvider.otherwise('/');
        })
}