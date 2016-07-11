var app;
(function (app) {
    var template = "\n        <div class=\"container\">\n            <h3>Shopping Cart</h3>\n            <ul>\n                <li ng-repeat=\"item in $ctrl.cart track by item.ProductID\">\n                    {{item.ProductName}}\n                </li>\n            </ul>\n        </div>\n    ";
    var component = {
        template: template,
        bindings: {},
        controller: 'CartProductListController'
    };
    var CartProductListController = (function () {
        function CartProductListController() {
            this.$onInit = function () {
            };
        }
        return CartProductListController;
    }());
    angular
        .module('app')
        .component('cartProductList', component)
        .controller('CartProductListController', CartProductListController);
})(app || (app = {}));
