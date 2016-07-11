var app;
(function (app) {
    var CartActions = (function () {
        function CartActions(dispatcher) {
            var _this = this;
            this.dispatcher = dispatcher;
            this.ADD_ITEM = 'ADD_ITEM';
            this.addItem = function (item) {
                _this.dispatcher.emit({
                    actionType: _this.ADD_ITEM,
                    item: item
                });
            };
        }
        CartActions.$inject = [
            'dispatcher'
        ];
        return CartActions;
    }());
    angular
        .module('app')
        .service('cartActions', CartActions);
})(app || (app = {}));
