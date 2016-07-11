module app {

    const template: string = `
        <div class="container">
            <h3>Products</h3>
            <ul>
                <li ng-repeat="item in $ctrl.products track by item.ProductID">
                    {{item.ProductName}}
                </li>
            </ul>
        </div>
    `;

    const component: angular.IComponentOptions = {
        template: template,
        bindings: {},
        controller: 'ProductListController'
    };

    class ProductListController {

    }

    angular
        .module('app')
        .component('productList', component)
        .controller('ProductListController', ProductListController);
}