import {Auth} from '/Api/Units/Auth/Auth.js';
import {Component} from '/Api/Components/Component/Component.js';
import {Leafable} from '/Api/Components/Leafable/Leafable.js';

import {AuthForm} from '../AuthForm/AuthForm.js';
import {MessageFlow} from '../MessageFlow/MessageFlow.js';


export class Root extends Component {
    static _components = [AuthForm, Leafable, MessageFlow];

    static _elements = {
        authForm: '',
        leafable: '',
        messageFlow: '',
    };


    static css_url = true;
    static html_url = true;
    static url = import.meta.url;

    static resources = {
        menu: new URL(`${this.name}.svg#menu`, import.meta.url),
    };


    static {
        this.define();
    }


    _auth = new Auth(new URL('../../Units/Auth/Auth__rest.php', import.meta.url));


    async _auth__verify() {
        let verified = await this._auth.verify();
        this._elements.leafable.index = +verified;

        if (this._elements.leafable.index) {
            await this._elements.messageFlow.messages__init();
        }
        else {
            this._elements.leafable.animation_implicit = true;
        }
    }

    _eventListeners__define() {
        // this.addEventListener('touchmove', this._on_touchMove, {passive: false});
        this.addEventListener('touchstart', this._on_touchStart, {passive: false});
        this._elements.authForm.addEventListener('logIn', this._authForm__on_logIn.bind(this));
    }

    async _init() {
        await this._auth__verify();

        visualViewport.onresize = visualViewport.onscroll = () => {
            this.style.height = visualViewport.height + 'px';
            this.style.top = visualViewport.offsetTop + 'px';
            this.refresh();
        };
    }

    _authForm__on_logIn() {
        this._elements.leafable.index = 1;
        this._elements.messageFlow.messages__init();
    }

    _on_touchMove(event) {
        event.preventDefault();
    }

    _on_touchStart(event) {
        event.preventDefault();
    }


    refresh() {
        this._elements.messageFlow.refresh();
    }
}
