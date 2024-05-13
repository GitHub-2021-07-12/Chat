import {Component} from '/Api/Components/Component/Component.js';


export class Message extends Component {
    static _attributes = {
        ...super._attributes,

        avatar_hue: {
            default: 0,
            range: [0, 360],
        },
        avatar_url: '',
        date: '',
        name: '',
        // timeStamp: {
        //     default: 0,
        //     range: [0, Infinity],
        // },
    };

    static _elements = {
        content: '',
        date: '',
        name: '',
    };


    static css_url = true;
    static html_url = true;
    static url = import.meta.url;


    static {
        this.define();
    }


    _avatar_char = '';
    _date = null;


    get avatar_hue() {
        return this._attributes.avatar_hue;
    }
    set avatar_hue(avatar_hue) {
        this._attribute__set('avatar_hue', avatar_hue);

        this.style.setProperty('--_Message__avatar_hue', this.avatar_hue);
    }

    get avatar_url() {
        return this._attributes.avatar_url;
    }
    set avatar_url(avatar_url) {
        this._attribute__set('avatar_url', avatar_url);

        if (this.avatar_url) {
            this.style.setProperty('--_Message__avatar_url', `url(${this.avatar_url})`);
        }
        else {
            this.style.removeProperty('--_Message__avatar_url');
        }
    }

    get content() {
        return this.textContent;
    }
    set content(content = '') {
        this.textContent = content.trim?.() || content;
    }

    get date() {
        return this._date;
    }
    set date(date) {
        let date_processed = null;

        if (date || date === 0) {
            date_processed = new Date(+date);

            if (isNaN(+date_processed)) {
                date_processed = new Date(date);

                if (isNaN(+date_processed)) {
                    date_processed = null;
                }
            }
        }

        this._date = date_processed;
        this._attribute__set('date', this._date?.toISOString());

        this._elements.date.textContent = this._date?.toLocaleString(undefined, {dateStyle: 'long', timeStyle: 'short'});
    }

    get name() {
        return this._attributes.name;
    }
    set name(name) {
        this._attribute__set('name', name);

        this._avatar_char = this.name[0] ?? '';
        this._elements.name.textContent = this.name;
        this.style.setProperty('--_Message__avatar_char', `'${this._avatar_char}'`);
    }

    // get timeStamp() {
    //     return this._attributes.timeStamp;
    // }
    // set timeStamp(timeStamp) {
    //     this._attribute__set('timeStamp', timeStamp);

    //     this._date = new Date(this.timeStamp);
    //     this._elements.date.textContent = this._date?.toLocaleString(undefined, {dateStyle: 'long', timeStyle: 'short'});
    // }


    _init() {
        this.content = this.content;
        this.props__sync();
    }
}
