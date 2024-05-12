import {Component} from '/Api/Components/Component/Component.js';


export class Message extends Component {
    static _elements = {
        content: '',
        name: '',
    };


    static css_url = true;
    static html_url = true;
    static url = import.meta.url;


    static {
        this.define();
    }


    _avatar_char = '';
    _avatar_hue = 0;
    _avatar_url = '';
    _content = '';
    _name = '';


    get avatar_hue() {
        return this._avatar_hue;
    }
    set avatar_hue(avatar_hue) {
        this._avatar_hue = avatar_hue || 0;
        this.style.setProperty('--_Message__avatar_hue', this._avatar_hue);
    }

    get avatar_url() {
        return this._avatar_url;
    }
    set avatar_url(avatar_url) {
        this._avatar_url = avatar_url || '';
        this.attribute__set('_avatar_url', !!this._avatar_url);

        if (this._avatar_url) {
            this.style.setProperty('--_Message__avatar_url', `url(${this._avatar_url})`);
        }
        else {
            this.style.removeProperty('--_Message__avatar_url');
        }

        // this._elements.avatar.style.backgroundImage = `url(${this._avatar_url})`;
    }

    get content() {
        return this._content;
    }
    set content(content) {
        this._content = content + '';
        this._elements.content.textContent = this._content;
    }

    get name() {
        return this._name;
    }
    set name(name) {
        this._name = name + '';
        this._avatar_char = this._name[0];
        this._elements.name.textContent = this._name;
        this.style.setProperty('--_Message__avatar_char', `'${this._avatar_char}'`);
    }


    _init() {
        this.avatar_hue = this.avatar_hue;
    }
}
