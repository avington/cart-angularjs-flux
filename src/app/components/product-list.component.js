var app;
(function (app) {
    var template = "\n        <div class=\"container\">\n            <h3>Products</h3>\n            <ul>\n                <li ng-repeat=\"item in $ctrl.products track by item.ProductID\">\n                    {{item.ProductName}}\n                </li>\n            </ul>\n        </div>\n    ";
    var component = {
        template: template,
        bindings: {},
        controller: 'ProductListController'
    };
    var ProductListController = (function () {
        function ProductListController() {
        }
        return ProductListController;
    }());
    angular
        .module('app')
        .component('productList', component)
        .controller('ProductListController', ProductListController);
})(app || (app = {}));
