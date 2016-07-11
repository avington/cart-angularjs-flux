module app {

    const template: string = `
        <div class="container">
            <h3>Shopping Cart</h3>
            <ul>
                <li ng-repeat="item in $ctrl.cart track by item.ProductID">
                    {{item.ProductName}}
                </li>
            </ul>
        </div>
    `;

    const component: angular.IComponentOptions = {
        template: template,
        bindings: {},
        controller: 'CartProductListController'
    };

    class CartProductListController {

        $onInit = () => {

        }
    }
    
    angular
        .module('app')
        .component('cartProductList', component)
        .controller('CartProductListController', CartProductListController);
}