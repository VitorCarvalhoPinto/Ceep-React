import React from "react";
import { Component } from "react";
import "./style.css"
export default class Notas extends Component {

    apagar(){
        let indice = this.props.indice
        this.props.apagarNota(indice)
    }

    render() {
        return (
            <section>
                <header>
                    <h3 key={this.props.indice} className="">{this.props.titulo}</h3>
                </header>
                <p className="">{this.props.texto}</p>
                <i className="fa fa-check fa-sm" aria-hidden="true"></i>
                <i onClick={this.apagar.bind(this)} className="fa fa-trash fa-sm" aria-hidden="true"></i>    
            </section>
        );
    }
}