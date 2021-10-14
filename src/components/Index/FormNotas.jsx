import React from "react";
import { Component } from "react";
import "./style.css"
export default class FormNotas extends Component {

    constructor(props){
        super(props)
        this.titulo = ''
        this.texto = ''
    }

    _handleMudancaTitulo(e){
        e.stopPropagation();
        this.titulo = e.target.value
    }

    _handleMudancaTexto(e){
        e.stopPropagation();
        this.texto = e.target.value
    }

    _criarNota(e){
        e.preventDefault();
        e.stopPropagation();
        this.props.criarNota(this.titulo, this.texto);
    }

    Screenshot(){
        let div = document.querySelectorAll('.screenshot')
        console.log('baixar imagem ainda n disponivel')
    }

    render() {
        return (
            <div className="esquerda">
                <form className="formulario" onSubmit={this._criarNota.bind(this)}>
                    <input type="text" placeholder="título" className="titulo" onChange={this._handleMudancaTitulo.bind(this)} />
                    <input  type="text" placeholder="escreva sua nota" className="corpo-texto" onChange={this._handleMudancaTexto.bind(this)} />
                    <button className="botao">Criar Nota</button>
                </form>
                <button onClick={this.Screenshot} className="screenshot botao">Tirar Foto</button>
            </div>
        );

        
    }
}