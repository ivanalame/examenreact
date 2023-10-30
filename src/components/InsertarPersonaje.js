import React, { Component } from 'react'
import Global from '../Global'
import axios from 'axios'
import { NavLink } from "react-router-dom";

export default class InsertarPersonaje extends Component {
    cajaNombre = React.createRef()
    cajaImagen = React.createRef()
    selectPersonaje = React.createRef()
    cajaidpersonaje= React.createRef()
    
    state = {
        series : [],
        statusSeries: false,
        statusPost:false,
        idserie: 0
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

    insertarPersonaje=(e)=>{
        e.preventDefault()
        var idPersonaje = parseInt(this.cajaidpersonaje.current.value) 
        var idSerie = parseInt(this.selectPersonaje.current.value) 
        var nombre = this.cajaNombre.current.value
        var imagen = this.cajaImagen.current.value
        console.log(idPersonaje,idSerie,nombre,imagen)

        var data = {
            idPersonaje:idPersonaje,
            nombre:nombre,
            imagen:imagen,
            idSerie:idSerie,
        }
        console.log(data)

        var request = "api/personajes"
        var url = Global.apiExamen+request
        console.log(url)
        axios.post(url,data).then(response=>{
            this.setState({
                statusPost: true,
                idserie:idSerie
            })
        })
    }
    componentDidMount=()=>{
        this.loadSeries()
    }
  render() {

    return (
      <div>
        <h1>InsertarPersonaje</h1>
                <form style={{ margin: "20px" }}>
                    <label>Id personaje</label>
                <input type='text' className='form-control' style={{margin:"30px"}} ref={this.cajaidpersonaje}></input>
        <div className="form-group">
            <label htmlFor="nombre">Nombre</label>
            <input type="text" className="form-control" id="nombre" style={{ margin: "30px" }} ref={this.cajaNombre} />
        </div>
        <div className="form-group">
            <label htmlFor="imagen">Imagen</label>
            <input type="text" className="form-control" id="imagen" style={{ margin: "30px" }} ref={this.cajaImagen} />
        </div>
        <div className="form-group">
            <label htmlFor="serie">Serie:</label>
            <select className="form-control" id="serie" ref={this.selectPersonaje}>
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
        <button onClick={this.insertarPersonaje} className="btn btn-dark mt-4"> <NavLink to={"/personajes/"+this.state.idserie}> Inserta Personaje</NavLink></button>
        </form>
        </div>
    )
  }
}
