import {Component} from '/Api/Components/Component/Component.js';
import {Edit} from '/Api/Components/Edit/Edit.js';

import {Auth} from '/Api/Units/Auth/Auth.js';


export class AuthForm extends Component {
    static _components = [Edit];

    static _elements = {
        button_logIn: '',
        edit_name: '',
        edit_password: '',
    };


    static css_url = true;
    static html_url = true;
    static url = import.meta.url;


    static {
        this.define();
    }


    _auth = new Auth(new URL('../../Units/Auth/Auth__rest.php', import.meta.url));


    async _button_logIn__on_pointerDown() {
        if (!this.validate()) return;

        await this._auth.logIn();

        if (!this._auth._token) return;

        this.event__dispatch('logIn');
    }

    _init() {
        this._elements.button_logIn.addEventListener('pointerdown', this._button_logIn__on_pointerDown.bind(this));
    }

    validate() {
        this._auth.name = this._elements.edit_name.value.trim().replace(/\s+/g, ' ');
        this._auth.password = this._elements.edit_password.value;

        return this._auth.name && this._auth.password;
    }
}
