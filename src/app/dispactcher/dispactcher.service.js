var app;
(function (app) {
    var DispatcherService = (function () {
        function DispatcherService() {
            var _this = this;
            this.listeners = [];
            this.emit = function (event) {
                _this.listeners.forEach(function (listener) {
                    listener(event);
                });
            };
            this.addListener = function (listener) {
                _this.listeners.push(listener);
                return _this.listeners.length = 1;
            };
        }
        return DispatcherService;
    }());
    app.DispatcherService = DispatcherService;
    angular
        .module('app')
        .service('dispatcher', DispatcherService);
})(app || (app = {}));
