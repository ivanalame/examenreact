import React, { Component } from 'react'
import axios from 'axios'
import Global from '../Global'
import { NavLink } from 'react-router-dom'

export default class PersonajesSerie extends Component {
    
    state={
        personajes:{},
        status:false
    }

    loadPersonajes=()=>{
        var id = this.props.idserie
        console.log(" is:"+id)
        var request = "/api/Series/PersonajesSerie/"+id;
        var url = Global.apiExamen +request
        axios.get(url).then(response=>{
            console.log(response.data)
            this.setState({
                status:true,
                personajes:response.data
            })
            console.log(this.state.personajes)
        })
    }

    componentDidMount=()=>{
        this.loadPersonajes()
    }
  render() {
    return (
        <div className="d-flex justify-content-center align-items-center flex-column"style={{ minHeight: "100 vh" }}>
            <h1>Lista Personajes</h1>

            <button><NavLink to={"/detalle/"+this.props.idserie}>Volver</NavLink></button>
       {
        this.state.status == true&&
        (
             <table className='table table-striped'>
            <thead className='thead-dark'>
                <tr>
                    <th>Personaje</th>
                    <th>Imagen</th>
                </tr>
            </thead>
            <tbody>
               {
                this.state.personajes.map((personaje,index)=>{
                    return(
                        <tr key={index}>
                                    <td>{personaje.nombre}</td>
                                    <td><img  style={{width:"150px"}} src={personaje.imagen}/></td>
                        </tr>
                    )
                })
               }
            </tbody>
         </table>
        )
       }
        
      </div>
    )
  }
}
