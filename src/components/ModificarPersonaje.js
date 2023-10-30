import React, { Component } from 'react'
import Global from '../Global'
import axios from 'axios'
import { NavLink } from "react-router-dom";


export default class ModificarPersonaje extends Component {

    selectSerie = React.createRef()
    selectPersonaje = React.createRef()

    state = {
        statusSeries:false,
        series:[],
        personajes:[],
        statusPersonajes:false,
        
    }

    loadSeries=()=>{
        var request = "api/series";
        var url = Global.apiExamen+request;
        axios.get(url).then(response=>{
            this.setState({
                statusSeries: true,
                series: response.data
            })
            console.log(this.state.series)
        })

    }

    loadPersonajesSerie=()=>{
        
        var request = "api/personajes"
        var url = Global.apiExamen+request
        console.log(url)
        axios.get(url).then(response=>{
            this.setState({
                statusPersonajes: true,
                personajes:response.data
            })
            console.log(this.state.personajes)
        })
    }
    
    componentDidMount=()=>{
        this.loadSeries()
        this.loadPersonajesSerie()
      
    }
    hacerCambios=(e)=>{
        e.preventDefault()
        var idSerie = this.selectSerie.current.value
        var idPersonaje = this.selectPersonaje.current.value
       
        var request = "api/Personajes/"+idPersonaje+"/"+ idSerie; 
        var url = Global.apiExamen+request
        console.log(url)
        axios.put(url).then(response=>{

        })

    }
  render() {
    return (
      <div>
       <h1>ModificarPersonaje</h1> 
       <form style={{ margin: "20px" }}>

        <div className="form-group">
            <label htmlFor="serie">Seleccione una serie:</label>
            <select  className="form-control" id="serie" ref={this.selectSerie}>
                {
                    this.state.statusSeries== true&&
                    (
                        this.state.series.map((serie,index)=>{
                            return(
                                <option key={index} value={serie.idSerie}>
                                    {serie.nombre}
                                </option>
                            )
                        })
                    )
                }
            
            </select>
        </div>
      
        <div className="form-group">
            <label htmlFor="serie">Seleccione un personaje:</label>
            <select className="form-control" id="serie" ref={this.selectPersonaje}>
            {
                    this.state.statusPersonajes== true&&
                    (
                        this.state.personajes.map((personaje,index)=>{
                            return(
                                <option key={index} value={personaje.idPersonaje}>
                                    {personaje.nombre}
                                </option>
                                
                            )
                            
                        })
                    )
                }
            </select>
        </div>

                
        <button onClick={this.hacerCambios} className="btn btn-dark mt-4">Guardar Cambios</button>
        </form>
        </div>
    )
  }
}
