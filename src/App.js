import React from "react";
import { Component } from "react";
import FormNotas from "./components/Index/FormNotas";
import ListaDeNotas from "./components/Notas/ListaDeNotas";

class App extends Component{

  constructor(){
    super(); 
    this.state = {
      notas: []
    }
  }


  criarNota(titulo, texto){
    const novaNota = {titulo, texto}
    const novoArrayNotas = [...this.state.notas, novaNota]
    const novoState = {
      notas: novoArrayNotas
    }
    this.setState(novoState)
  }

  render(){
    return (
      <section>
        <FormNotas criarNota={this.criarNota.bind(this)}/>
        <ListaDeNotas notas={this.state.notas}/>
      </section>
      );
  }
}
export default App;
