import React from "react";
import { Component } from "react";
import Notas from "./Notas";
export default class ListaDeNotas extends Component {

    render() {
        return (
            <div className="direita">
                    <ul className="lista-notas">
                        <h1>Mural de Notas</h1>
                        {this.props.notas.map((nota, index) => {
                            return (
                                <li className="notas" key={index}>
                                    <Notas 
                                    indice={index}
                                    apagarNota={this.props.apagarNota}
                                    titulo={nota.titulo} 
                                    texto={nota.texto}/>
                                </li>
                            );
                        })
                        }

                    </ul>
            </div>
        );
    }
}