import React from 'react';
import { Link } from 'react-router-dom';


const Menu = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/"><h2>Home 🏠</h2></Link>
        </li>
        <li>
          <Link to="/tareas"><h2>Tareas 📑</h2></Link>
        </li>
        <li>
          <Link to="/sobre-nosotros"><h2>Sobre Nosotros 👩‍💻</h2></Link>
        </li>
        
      </ul>
    </nav>
    
  );
};

export default Menu;
