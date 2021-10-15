import html2canvas from "html2canvas";
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
        html2canvas(document.querySelector('.direita')).then(function (canvas) {
            var anchorTag = document.createElement("a");
            document.body.appendChild(anchorTag);
            anchorTag.download = "teste.jpg";
            anchorTag.href = canvas.toDataURL();
            anchorTag.target = '_blank';
            anchorTag.click();
        })
    }

    render() {
        return (
            <div className="esquerda">
                <form className="formulario" onSubmit={this._criarNota.bind(this)}>
                    <input type="text" placeholder="título" className="titulo" onChange={this._handleMudancaTitulo.bind(this)} required/>
                    <input  type="text" placeholder="escreva sua nota" className="corpo-texto" onChange={this._handleMudancaTexto.bind(this)}  required/>
                    <button className="botao">Criar Nota</button>
                    <i onClick={this.Screenshot} title="Baixar mural de notas" className="download fa fa-download fa-2x"></i>
                </form>

            </div>
        );

        
    }
}