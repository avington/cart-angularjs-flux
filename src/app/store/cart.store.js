var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var app;
(function (app) {
    var CartStoreService = (function (_super) {
        __extends(CartStoreService, _super);
        function CartStoreService() {
            _super.call(this);
            this.cartItems = [];
        }
        CartStoreService.prototype.addItem = function (product) {
            var items = this.cartItems.filter(function (i) { return i.product.ProductID == product.ProductID; });
            if (items.length == 0) {
                this.cartItems.push({ qty: 1, product: product });
            }
            else {
                items[0].qty += 1;
            }
        };
        CartStoreService.prototype.emitChange = function (event) {
            this.emit(event);
        };
        return CartStoreService;
    }(app.DispatcherService));
    var CartStore = (function () {
        function CartStore(dispatcher) {
            var _this = this;
            this.dispatcher = dispatcher;
            this.$inject = [
                'dispatcher'
            ];
            this.addCartListeners = function () {
                _this.dispatcher.addListener(function (action) {
                    switch (action.actionType) {
                        case 'ADD_ITEM':
                            _this.cartStore.addItem(action.item);
                            _this.cartStore.emitChange();
                            break;
                    }
                });
            };
            this.addListener = function (listener) {
                return _this.cartStore.addListener(listener);
            };
            this.cartItems = function () {
                return _this.cartStore.cartItems;
            };
            this.addCartListeners();
            this.cartStore = new CartStoreService();
        }
        return CartStore;
    }());
    angular
        .module('app')
        .service('cartStore', CartStore);
})(app || (app = {}));
