module app {

    export interface ICartActions {
        ADD_ITEM: string;
        addItem: (item) => void;
    }

    class CartActions implements ICartActions {

        static $inject: Array<string> = [
            'dispatcher'
        ];

        constructor(
            private dispatcher: IDispatcherService
        ) {}

        ADD_ITEM = 'ADD_ITEM'; 

        addItem = (item) => {
            
            this.dispatcher.emit({
                actionType: this.ADD_ITEM,
                item: item
            });

        };
        
    }

    angular
        .module('app')
        .service('cartActions', CartActions);
}