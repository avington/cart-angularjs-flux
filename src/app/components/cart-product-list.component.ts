module app {

    const template: string = `
        <div>
            <h3>Shopping Cart</h3>
            <ul>
                <li ng-repeat="item in $ctrl.cartItems track by item.product.ProductID">
                    {{item.product.ProductName}} - {{item.qty}}
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

        static $inject: Array<string> = [
            'cartStore'
        ];

        constructor(
            private cartStore: ICartStore
        ){}

        cartItems: Array<ICartItem>;

        $onInit = () => {
            this.cartStore.addListener(() => this.resetItems());
        }

        resetItems = () => {
            this.cartItems = this.cartStore.cartItems();
        }
    }
    
    angular
        .module('app')
        .component('cartProductList', component)
        .controller('CartProductListController', CartProductListController);
}