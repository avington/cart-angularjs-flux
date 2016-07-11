var app;
(function (app) {
    var template = "\n        <div>\n            <h3>Shopping Cart</h3>\n            <ul>\n                <li ng-repeat=\"item in $ctrl.cartItems track by item.product.ProductID\">\n                    {{item.product.ProductName}} - {{item.qty}}\n                </li>\n            </ul>\n        </div>\n    ";
    var component = {
        template: template,
        bindings: {},
        controller: 'CartProductListController'
    };
    var CartProductListController = (function () {
        function CartProductListController(cartStore) {
            var _this = this;
            this.cartStore = cartStore;
            this.$onInit = function () {
                _this.cartStore.addListener(function () { return _this.resetItems(); });
            };
            this.resetItems = function () {
                _this.cartItems = _this.cartStore.cartItems();
            };
        }
        CartProductListController.$inject = [
            'cartStore'
        ];
        return CartProductListController;
    }());
    angular
        .module('app')
        .component('cartProductList', component)
        .controller('CartProductListController', CartProductListController);
})(app || (app = {}));
