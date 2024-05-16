import {Component} from '/Api/Components/Component/Component.js';
import {Leafable} from '/Api/Components/Leafable/Leafable.js';

import {AuthForm} from '../AuthForm/AuthForm.js';
import {MessageFlow} from '../MessageFlow/MessageFlow.js';


export class Root extends Component {
    static _components = [AuthForm, Leafable, MessageFlow];

    static _elements = {
        authForm: '',
        messageFlow: '',
        root: '',
    };


    static css_url = true;
    static html_url = true;
    static url = import.meta.url;


    static {
        this.define();
    }


    _init() {
        this.addEventListener('touchstart', this._on_touchStart);
        this._elements.authForm.addEventListener('logIn', this._authForm__on_logIn.bind(this));
    }

    _authForm__on_logIn() {
        this._elements.root.index = 1;
        this._elements.messageFlow.refresh();
    }

    _on_touchStart(event) {
        // event.preventDefault();
    }
}
