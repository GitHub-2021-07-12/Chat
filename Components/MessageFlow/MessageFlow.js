import {Component} from '/Api/Components/Component/Component.js';
import {Flickable} from '/Api/Components/Flickable/Flickable.js';
import {TextArea} from '/Api/Components/TextArea/TextArea.js';
import {Repeater} from '/Api/Components/Repeater/Repeater.js';

import {Message} from '../Message/Message.js';


export class MessageFlow extends Component {
    static _components = [Flickable, Message, Repeater, TextArea];


    static css_url = true;
    static html_url = true;
    static url = import.meta.url;


    static {
        this.define();
    }


    _init() {
        for (let i = 0; i < 10; i++) {
            let avatar_hue = Math.random() * 360;
            this._elements.repeater.model.add({
                avatar_hue,
                content: avatar_hue,
                name: avatar_hue,
            });

            // this._elements.repeater.children[i].style.visibility = 'hidden';
            // await this._elements.repeater.children[i]._built;
            // this._elements.repeater.children[i].style.visibility = '';
        }


        this.refresh();
        this._elements.display.scroll_y = Infinity;

        this.addEventListener('touchstart', this._on_touchStart, false);
        this._elements.textArea.eventListeners__add({
            keydown: this._textArea__on_keyDown.bind(this),
            resize: this._textArea__on_resize.bind(this),
        });

        window.addEventListener('resize', this._window__on_resize.bind(this));
    }

    _message__send() {
        let message_content = this._elements.textArea.value.trim();
        this._elements.textArea.value = '';

        if (message_content) {
            let avatar_hue = Math.random() * 360;
            this._elements.repeater.model.add({
                avatar_hue,
                content: message_content,
                name: avatar_hue,
            });
        }

        this.refresh();
    }

    _on_touchStart(event) {
        // event.preventDefault();
    }

    _textArea__on_keyDown(event) {
        if (!event.shiftKey || event.key != 'Enter') return;

        event.preventDefault();

        this._message__send();
    }

    _textArea__on_resize() {
        this.refresh();
    }

    _window__on_resize() {
        this.refresh();
    }


    message__send(message) {

    }

    refresh() {
    // async refresh() {
        // await this._elements.repeater.children[0]?._built;

        this._elements.textArea.refresh();
        this._elements.display.refresh();
    }
}
