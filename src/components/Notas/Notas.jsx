import React from "react";
import { Component } from "react";
import "./style.css"
export default class Notas extends Component {

    render() {
        return (
            <section>
                <header>
                    <h3>{this.props.titulo}</h3>
                </header>
                <p>{this.props.texto}</p>
            </section>
        );
    }
}