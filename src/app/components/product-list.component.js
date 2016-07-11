var app;
(function (app) {
    var template = "\n        <div class=\"product-list\">\n            <h3>Products</h3>\n            <ul>\n                <li ng-repeat=\"item in $ctrl.products track by item.ProductID\">\n                    <div class=\"product-item\">\n                        <div>{{item.ProductName}}</div>\n                        <button class=\"button\" type=\"button\" ng-click=\"$ctrl.addItem(item)\">Add to Cart</button>\n                    </div>\n                    \n                </li>\n            </ul>\n        </div>\n    ";
    var component = {
        template: template,
        bindings: {},
        controller: 'ProductListController'
    };
    var ProductListController = (function () {
        function ProductListController(productData, cartActions) {
            var _this = this;
            this.productData = productData;
            this.cartActions = cartActions;
            this.$onInit = function () {
                _this.productData.getAll()
                    .then(function (products) {
                    _this.products = products;
                });
            };
            this.addItem = function (item) {
                _this.cartActions.addItem(item);
            };
        }
        ProductListController.$inject = [
            'productData',
            'cartActions'
        ];
        return ProductListController;
    }());
    angular
        .module('app')
        .component('productList', component)
        .controller('ProductListController', ProductListController);
})(app || (app = {}));
