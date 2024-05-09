import {Component} from '/Api/Components/Component/Component.js';

import {MessageFlow} from '../MessageFlow/MessageFlow.js';


export class Main extends Component {
    static _components = [MessageFlow];
    static _css = true;
    static _html = true;
    static _url = import.meta.url;


    static {
        this.init();
    }


    _init() {
        // this.addEventListener('load', () => console.log(1));
        this.addEventListener('touchstart', this._on_touchStart, false);

        // setTimeout(() => this._elements.messageFlow.refresh());
    }

    _on_touchStart(event) {
        // event.preventDefault();
    }
}
