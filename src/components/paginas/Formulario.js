import React, { useState } from 'react';

const Formulario = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    apodo: '',
    pokemonFavorito: '',
    correoElectronico: '',
    color: 'green' 
  });

  const manejarCambioFormulario = (e) => {
    
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  

  const cambioColor = (e) => {
    console.log(e.target)
    const selectedColor = e.target.value;
    setFormData({
      ...formData,
      color: selectedColor
    });
  };

  const ClickEnviar = (e) => {
    e.preventDefault();
    
    const alertMessage =` 
      Color: ${formData.color}
      Nombre: ${formData.nombre}
      Apellido: ${formData.apellido}
      Apodo: ${formData.apodo}
      Pokemon Favorito: ${formData.pokemonFavorito}
      Correo Electrónico: ${formData.correoElectronico}
    `;
    
    alert(alertMessage);
  };

  const { nombre, apellido, apodo, pokemonFavorito, correoElectronico, color } = formData;

  const formStyle = {
    backgroundColor: color === 'green' ? 'lightgreen' : 
                    color === 'celeste' ? 'lightblue' :
                    color === 'rosado' ? 'lightpink' :
                    color === 'amarillo' ? 'yellow' :
                    color === 'papaya' ? '#FFA07A' : ''
  };

  const bodyStyle = {
    backgroundColor: 'black',
    
  };
   
  return (
    <div className="container" style={bodyStyle}>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form onSubmit={ClickEnviar} style={formStyle}>
          <div className="mb-3">
              <label htmlFor="color" className="form-label bold">Color</label>
              <select className="form-select" id="color" name="color" value={color} onChange={cambioColor}>
                <option value="verde claro">Verde Claro</option>
                <option value="celeste">Celeste</option>
                <option value="rosado">Rosado</option>
                <option value="amarillo">Amarillo</option>
                <option value="papaya">Papaya</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="nombre" className="form-label font-weight-bold">Nombre</label>
              <input type="text" className="form-control" id="nombre" name="nombre" value={nombre} onChange={manejarCambioFormulario} />
            </div>
            <div className="mb-3">
              <label htmlFor="apellido" className="form-label font-weight-bold">Apellido</label>
              <input type="text" className="form-control" id="apellido" name="apellido" value={apellido} onChange={manejarCambioFormulario} />
            </div>
            <div className="mb-3">
              <label htmlFor="apodo" className="form-label font-weight-bold">Apodo</label>
              <input type="text" className="form-control" id="apodo" name="apodo" value={apodo} onChange={manejarCambioFormulario} />
            </div>
            <div className="mb-3">
                <label className="form-label font-weight-bold">Pokemon Favorito:</label>
                <div className="d-flex">
                  <div className="form-check me-3">
                    <input className="form-check-input" type="radio" name="pokemonFavorito" id="charmander" value="Charmander" onChange={manejarCambioFormulario} />
                    <label className="form-check-label" htmlFor="charmander">Charmander</label>
                  </div>
                  <div className="form-check me-3">
                    <input className="form-check-input" type="radio" name="pokemonFavorito" id="squirtle" value="Squirtle" onChange={manejarCambioFormulario} />
                    <label className="form-check-label" htmlFor="squirtle">Squirtle</label>
                  </div>
                  <div className="form-check me-3">
                    <input className="form-check-input" type="radio" name="pokemonFavorito" id="bulbasaur" value="Bulbasaur" onChange={manejarCambioFormulario} />
                    <label className="form-check-label" htmlFor="bulbasaur">Bulbasaur</label>
                  </div>
                  <div className="form-check me-3">
                    <input className="form-check-input" type="radio" name="pokemonFavorito" id="pikachu" value="Pikachu" onChange={manejarCambioFormulario} />
                    <label className="form-check-label" htmlFor="pikachu">Pikachu</label>
                  </div>
                </div>
            </div>
            <div className="mb-3">
              <label htmlFor="correoElectronico" className="form-label font-weight-bold">Correo Electrónico</label>
              <input type="email" className="form-control" id="correoElectronico" name="correoElectronico" value={correoElectronico} onChange={manejarCambioFormulario} />
            </div>
            
            <button type="submit" className="btn btn-primary font-weight-bold">ENVIAR</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Formulario;