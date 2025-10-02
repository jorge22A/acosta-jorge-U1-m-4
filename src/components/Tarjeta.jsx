import estilos from './Tarjeta.module.css';

function Tarjeta({ nombre, profesion, imagen, descripcion }) {
  return (
    <div className={estilos.tarjeta}>
      <img 
        src={imagen} 
        alt={`Foto de perfil de ${nombre}`}
        className={estilos.imagen}
      />
      <h2 className={estilos.nombre}>{nombre}</h2>
      <h3 className={estilos.profesion}>{profesion}</h3>
      <p className={estilos.descripcion}>{descripcion}</p>
    </div>
  );
}

export default Tarjeta;