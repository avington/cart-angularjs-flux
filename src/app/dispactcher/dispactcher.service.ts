module app {

    export interface IEvent {
        actionType: string;
        item: any;
    }

    export interface IDispatcherService {
        emit: (event: string) => void;
        addListener: (listenter: any) => number;
    }

    export class DispatcherService implements  IDispatcherService {

        listeners: Array<any> = [];
        
        emit = (event: string) => {
            this.listeners.forEach((listener) => {
                listener(event);
            });
        };

        addListener = (listener) => {
            this.listeners.push(listener);
            return this.listeners.length = 1;
        }
    }

    angular
        .module('app')
        .service('dispatcher', DispatcherService);
}