import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Global from "../Global";
import axios from "axios";

export default class DetalleSerie extends Component {
  state = {
    serie: {},
    status: false,
  };

  loadDetalleSerie = () => {
    var id = this.props.id;
    console.log(id);
    var request = "api/series/" + id;
    console.log(request);
    var url = Global.apiExamen + request;
    axios.get(url).then((response) => {
      this.setState({
        status: true,
        serie: response.data,
      });
    });
  };

  componentDidMount = () => {
    this.loadDetalleSerie();
  };
  render() {
    return (
      <div
        className="d-flex justify-content-center align-items-center flex-column"
        style={{ minHeight: "100 vh" }}>
            <button><NavLink to={"/"}>Volver</NavLink></button>
        {this.state.status == true && (
          <div>
            <h1>DetalleSerie</h1>
            

            <img style={{ margin: '12px 0', height:"400px", width:"450px"}} src={this.state.serie.imagen}/>
            <h1>Nombre de la serie: {this.state.serie.nombre}</h1>
            <h2>IMDB: {this.state.serie.puntuacion}</h2>
            <button><NavLink to={"/personajes/"+this.state.serie.idSerie}>Personajes</NavLink></button>
          </div>
        )}
      </div>
    );
  }
}
