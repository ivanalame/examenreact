import React, { Component } from 'react'
import MenuSeries from './MenuSeries'
import { Routes,Route,BrowserRouter,useParams } from 'react-router-dom';
import DetalleSerie from './DetalleSerie';
import PersonajesSerie from './PersonajesSerie';
import InsertarPersonaje from './InsertarPersonaje';
import ModificarPersonaje from './ModificarPersonaje';


export default class Router extends Component {
  render() {
    function DetalleSerieElement() {
        var {id} = useParams()
        return<DetalleSerie id = {id}/>
    }
    function PersonajesElement() {
        var {idserie} = useParams()
        return<PersonajesSerie idserie = {idserie}/>
    }
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<MenuSeries/>}></Route>
                <Route path='/detalle/:id' element={<DetalleSerieElement/>}/>
                <Route path='/personajes/:idserie' element={<PersonajesElement/>}/>
                <Route path='/insertar' element={<InsertarPersonaje/>}></Route>
                <Route path='/modificar' element={<ModificarPersonaje/>}></Route>
            </Routes>
        </BrowserRouter>
    )
  }
}
