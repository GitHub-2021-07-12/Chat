import {Component} from '/Api/Components/Component/Component.js';
import {Edit} from '/Api/Components/Edit/Edit.js';

import {Rest} from '/Api/Units/Rest/Rest.js';


export class AuthForm extends Component {
    static _components = [Edit];


    static css_url = true;
    static html_url = true;
    static url = import.meta.url;


    static {
        this.define();
    }


    _rest = new Rest(new URL(`${this.constructor.name}.php`, this.constructor.url));


    _init() {
        // this.register();
        this.logIn();
    }


    async logIn() {
        let {data} = await this._rest.call('logIn', 'name', 'password');

        console.log(data)


    }

    async register() {
        let {data} = await this._rest.call('register', 'name', 'password');

        console.log(data)


    }
}
