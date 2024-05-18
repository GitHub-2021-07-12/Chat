import {Component} from '/Api/Components/Component/Component.js';
import {Flickable} from '/Api/Components/Flickable/Flickable.js';
import {TextArea} from '/Api/Components/TextArea/TextArea.js';
import {Repeater} from '/Api/Components/Repeater/Repeater.js';

import {Auth} from '/Api/Units/Auth/Auth.js';
import {Rest} from '/Api/Units/Rest/Rest.js';

import {Message} from '../Message/Message.js';


export class MessageFlow extends Component {
    static _components = [Flickable, Message, Repeater, TextArea];

    static _elements = {
        button_send: '',
        display: '',
        repeater: '',
        textArea: '',
    };


    static css_url = true;
    static html_url = true;
    static url = import.meta.url;

    static resources = {
        arrow_send: new URL('../../Theme/Theme.svg#arrow_send', this.url),
    };


    static {
        this.define();
    }


    // _auth = new Auth(new URL('../../Units/Auth/Auth__rest.php', import.meta.url));
    _auth = new Auth();
    _rest = new Rest(new URL(`${this.constructor.name}__rest.php`, import.meta.url));


    _button_send__on_pointerDown() {
        this.message__send();
    }

    _init() {
        for (let i = 0; i < 3; i++) {
            let avatar_hue = Math.random() * 360;
            this._elements.repeater.model.add({
                avatar_hue,
                content: avatar_hue,
                date: new Date(),
                name: avatar_hue,
            });
        }


        this._rest.data__get = () => ({token: this._auth._token});
        this.refresh();

        this.addEventListener('touchstart', this._on_touchStart, false);
        this._elements.button_send.addEventListener('pointerdown', this._button_send__on_pointerDown.bind(this), false);
        this._elements.repeater.eventListeners__add({
            add: this._repeater__on_add.bind(this),
            define: this._repeater__on_add.bind(this),
        });
        this._elements.textArea.eventListeners__add({
            keydown: this._textArea__on_keyDown.bind(this),
            resize: this._textArea__on_resize.bind(this),
        });

        window.addEventListener('resize', this._window__on_resize.bind(this));
    }

    _message__send() {
        let message_content = this._elements.textArea.value.trim();

        if (message_content) {
            let avatar_hue = Math.random() * 360;
            this._elements.repeater.model.add({
                avatar_hue,
                content: message_content,
                date: new Date(),
                name: avatar_hue,
                own: true,
            });
        }

        this._elements.textArea.value = '';
        this._elements.display.refresh();
        // this.refresh();
    }

    _on_touchStart(event) {
        // event.preventDefault();
    }

    _repeater__on_add(event) {
        this.refresh();
    }

    _textArea__on_keyDown(event) {
        if (!event.shiftKey || event.key != 'Enter') return;

        event.preventDefault();

        this._message__send();
    }

    _textArea__on_resize() {
        this._elements.display.refresh();
        // this.refresh();
    }

    _window__on_resize() {
        this.refresh();
    }


    async message__send() {
        let message = this._elements.textArea.value.trim();
        this._elements.textArea.value = '';
        this._elements.display.refresh();

        if (!message) return;

        let {result} = await this._rest.call('message__add', message);

        console.log(result)
    }

    refresh() {
        this._elements.textArea.refresh();
        this._elements.display.refresh();
    }
}
