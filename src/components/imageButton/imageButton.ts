import { Component } from "../Block";
import tpl from "./ImageButton.hbs";
import "./ImageButton.scss";

export class ImageButton extends Component {
    constructor(props : {[key: string] : object | string } = {}) {
        super({...props, tagName:"div", attr: {...(props.attr as object),  class: "image-button"}});
    }

    render()  {
        const {text, imageUrl} = this.props;
        return this.compile(tpl, { text, imageUrl });
    }
}