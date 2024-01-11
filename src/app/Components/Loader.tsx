import React from 'react'

const Loader = () => {
  return (
    <div id="contenedor">
      <div className="contenedor-loader">
        <div className="rueda"></div>
      </div>
      <div className="cargando">Cargando...</div>
    </div>
  );
}

export default Loader
