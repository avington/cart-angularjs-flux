module app {

    export interface ICartItem {
        qty: number;
        product: IProduct;
    }

    export interface ICartStore {
        addListener: (listener) => void;
        cartItems: () => Array<ICartItem>;
    }

    class CartStoreService extends DispatcherService {
        constructor() {
            super();
            this.cartItems = [];
        }

        cartItems: Array<ICartItem>;

        addItem(product: IProduct) {

            var items = this.cartItems.filter((i) => i.product.ProductID == product.ProductID);

            if (items.length == 0) {
                this.cartItems.push({ qty: 1, product: product });
            } else {
                items[0].qty += 1;
            }
        }

        emitChange() {
            this.emit('change');
        }

    }

    class CartStore {

        $inject: Array<string> = [
            'dispatcher' 
        ];

        cartStore: any;

        constructor(
            private dispatcher: IDispatcherService
        ) {
            this.addCartListeners();
            this.cartStore = new CartStoreService();
        }

        private addCartListeners = () => {
            this.dispatcher.addListener((action) => {
                switch (action.actionType) {
                    case 'ADD_ITEM':
                        this.cartStore.addItem(action.item);
                        this.cartStore.emitChange();
                        break;
                }

            });

        }

        addListener = (listener) => {
            return this.cartStore.addListener(listener);
        }

        cartItems = () => {
            return this.cartStore.cartItems;
        }

    }


    angular
        .module('app')
        .service('cartStore', CartStore);
}