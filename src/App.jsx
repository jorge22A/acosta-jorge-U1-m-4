import Tarjeta from './components/Tarjeta';
import estilos from './components/Tarjeta.module.css';
import './App.css';

function App() {
  return (
    <div className={estilos.contenedorTarjetas}>
      <Tarjeta 
        nombre="María González"
        profesion="Desarrolladora Frontend"
        imagen="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&crop=face"
        descripcion="Especialista en React y diseño de interfaces modernas. Apasionada por crear experiencias digitales excepcionales."
      />
      
      <Tarjeta 
        nombre="Carlos Rodríguez"
        profesion="Diseñador UX/UI"
        imagen="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
        descripcion="Enfocado en investigación de usuarios y prototipado. Me gusta resolver problemas complejos con soluciones simples."
      />
      
      <Tarjeta 
        nombre="Ana Martínez"
        profesion="Product Manager"
        imagen="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face"
        descripcion="Experta en gestión de productos digitales y metodologías ágiles. Conectando tecnología con necesidades del usuario."
      />
    </div>
  );
}

export default App;