import {Component} from '/Api/Components/Component/Component.js';
import {Leafable} from '/Api/Components/Leafable/Leafable.js';

import {Auth} from '/Api/Units/Auth/Auth.js';

import {AuthForm} from '../AuthForm/AuthForm.js';
import {MessageFlow} from '../MessageFlow/MessageFlow.js';


export class Root extends Component {
    static _components = [AuthForm, Leafable, MessageFlow];

    static _attributes = {
        ...super._attributes,

        _verification: false,
    };

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


    _auth = new Auth(new URL('../../Units/Auth/Auth__rest.php', import.meta.url));


    get _verification() {
        return this._attributes._verification;
    }
    set _verification(verification) {
        this._attribute__set('_verification', verification);
    }


    async _auth__verify() {
        this._verification = true;

        let verified = await this._auth.verify();
        this._elements.root.index = +verified;

        if (this._elements.root.index) {
            await this._elements.messageFlow.messages__init();
        }
        else {
            this._elements.root.animation_implicit = true;
        }

        this._verification = false;
    }

    _init() {
        this._auth__verify();

        this.addEventListener('touchstart', this._on_touchStart);
        this._elements.authForm.addEventListener('logIn', this._authForm__on_logIn.bind(this));
    }

    _authForm__on_logIn() {
        this._elements.root.index = 1;
        this._elements.messageFlow.messages__init();
    }

    _on_touchStart(event) {
        // event.preventDefault();
    }


    refresh() {
        this._elements.messageFlow.refresh();
    }
}
