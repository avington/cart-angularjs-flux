module app {

    const template: string = `
        <div class="product-list">
            <h3>Products</h3>
            <ul>
                <li ng-repeat="item in $ctrl.products track by item.ProductID">
                    <div class="product-item">
                        <div>{{item.ProductName}}</div>
                        <button class="button" type="button" ng-click="$ctrl.addItem(item)">Add to Cart</button>
                    </div>
                    
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

        static $inject: Array<string> = [
            'productData',
            'cartActions'
        ];

        constructor(
            private productData: IProductDataService,
            private cartActions: ICartActions
        ) {
        }

        products: Array<IProduct>

        $onInit = () => {
            this.productData.getAll()
                .then((products) => {
                    this.products = products;
                });
        }

        addItem = (item: IProduct) => {
            this.cartActions.addItem(item);
        }
    }

    angular
        .module('app')
        .component('productList', component)
        .controller('ProductListController', ProductListController);
}