import {Component} from '/Api/Components/Component/Component.js';

import {AuthForm} from '../AuthForm/AuthForm.js';
import {MessageFlow} from '../MessageFlow/MessageFlow.js';


export class Root extends Component {
    static _components = [MessageFlow];


    static css_url = true;
    static html_url = true;
    static url = import.meta.url;

    // static resources = {
    //     theme: new URL('../../Theme/Theme.css', this.url),
    // };


    static {
        this.define();
    }


    // async _build() {
    //     this.style.visibility = 'hidden';

    //     await super._build();

    //     this.style.visibility = '';
    // }

    _init() {
        // this._elements.messageFlow.refresh();
        // setTimeout(() => this._elements.messageFlow.refresh());

        this.addEventListener('touchstart', this._on_touchStart);

        // console.log(this._elements.messageFlow._built, this._built)
    }

    _on_touchStart(event) {
        // event.preventDefault();
    }
}
