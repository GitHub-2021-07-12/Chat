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

    static Repeater_manager = class extends Repeater.Manager {
        data__apply() {
            this._item.avatar_hue = this._model_item.avatar_hue;
            this._item.avatar_url = this._model_item.avatar_url;
            this._item.date = this._model_item.date * 1e3;
            this._item.name = this._model_item.name;
            this._item.own = !!this._model_item.own;
            this._item.text = this._model_item.text;
        }

        init() {
            this.data__apply();
        }
    };

    static resources = {
        arrow_send: new URL('../../Theme/Theme.svg#arrow_send', this.url),
    };


    static {
        this.define();
    }


    _auth = new Auth();
    _rest = new Rest(new URL(`${this.constructor.name}.php`, import.meta.url));


    _button_send__on_pointerDown() {
        this.message__send();
    }

    _init() {
        this._elements.repeater.Manager = this.constructor.Repeater_manager;
        this._rest.data__create = () => ({token: this._auth._token});
        this.refresh();

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

    _repeater__on_add(event) {
        this.refresh();
    }

    _textArea__on_keyDown(event) {
        if (!event.shiftKey || event.key != 'Enter') return;

        event.preventDefault();

        this.message__send();
    }

    _textArea__on_resize() {
        this._elements.display.refresh();
    }

    _window__on_resize() {
        this.refresh();
    }


    async message__send() {
        let message_text = this._elements.textArea.value.trim();
        this._elements.textArea.value = '';
        this._elements.display.refresh();

        if (!message_text) return;

        let {result} = await this._rest.call('message__add', message_text);

        return result;
    }

    async messages__init() {
        this._auth.token__restore();

        await this.messages__load();
        this.messages_new__load();

        this.refresh();
    }

    async messages__load() {
        let {result} = await this._rest.call('messages__get');

        if (!result) return;

        this._elements.repeater.model.add(result);
    }

    async messages_new__load() {
        let {result} = await this._rest.call('messages_new__get');

        if (!result) return;

        this._elements.repeater.model.add(result);

        this.messages_new__load();
    }

    refresh() {
        this._elements.textArea.refresh();
        this._elements.display.refresh();
    }
}
