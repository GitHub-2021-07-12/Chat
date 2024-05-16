import {Component} from '/Api/Components/Component/Component.js';
import {Edit} from '/Api/Components/Edit/Edit.js';
import {TrackBar} from '/Api/Components/TrackBar/TrackBar.js';

import {Rest} from '/Api/Units/Rest/Rest.js';


export class AuthForm extends Component {
    static _components = [Edit, TrackBar];

    static _elements = {
        button_logIn: '',
        edit_name: '',
        edit_password: '',
        trackBar_hue: '',
    };


    static css_url = true;
    static html_url = true;
    static url = import.meta.url;


    static {
        this.define();
    }


    _name = '';
    _password = '';
    _rest = new Rest(new URL(`${this.constructor.name}.php`, this.constructor.url));


    // name_length_max = 30;
    // password_length_max = 30;


    _button_logIn__on_pointerDown() {
        if (!this.validate()) return;

        // this._data__define();
        this.logIn();
    }

    _data__define() {
        this._name = this._elements.edit_name.value.trim().replace(/\s+/g, ' ');
        this._password = this._elements.edit_password.value;
    }

    _init() {
        // this.register();
        // this.logIn();

        this._elements.button_logIn.addEventListener('pointerdown', this._button_logIn__on_pointerDown.bind(this));

        window.addEventListener('resize', this._window__on_resize.bind(this));
    }

    _window__on_resize() {
        this.refresh();
    }


    async logIn() {
        let {data} = await this._rest.call('logIn', this._name, this._password);

        console.log(data)

        this.event__dispatch('logIn');
    }

    refresh() {
        this._elements.trackBar_hue.refresh();
        this._elements.trackBar_hue.value_max = null;
    }

    // async register() {
    //     let {data} = await this._rest.call('register', 'name', 'password');

    //     console.log(data)


    // }

    validate() {
        this._name = this._elements.edit_name.value.trim().replace(/\s+/g, ' ');
        this._password = this._elements.edit_password.value;

        return this._name && this._password;

        // console.log(this._name, this._password)

        // // if (this._name.length > this.name_length_max || this._password.length > this.password_length_max) {


        // //     return false;
        // // }

        // return true;
    }
}
