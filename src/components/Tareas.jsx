import React, { useState } from 'react';

const Tareas = ({ tareas }) => {
  const [tareasState, setTareasState] = useState(tareas);
  const [nuevaTarea, setNuevaTarea] = useState('');

  const agregarTarea = () => {
    if (nuevaTarea.trim() !== '') {
      setTareasState([tareasState, nuevaTarea]); // Agregar la nueva tarea al estado actual
      setNuevaTarea('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    agregarTarea();
  };

  const eliminarTarea = (index) => {
    if (window.confirm('¿Seguro que quieres elimnar esta tarea?')){
      const nuevasTareas = [...tareasState];
      nuevasTareas.splice(index, 1);
      setTareasState(nuevasTareas);
    }
  };

  const marcarComoCompletada = (index) => {
    const nuevasTareas = [...tareasState];
    if (!nuevasTareas[index].includes('✅')){
      nuevasTareas[index] = `✅ ${nuevasTareas[index]}`;
      setTareasState(nuevasTareas);
    }
  };

  return (
    <div className='App'>
      <h1>Listado de Tareas</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nueva tarea"
            value={nuevaTarea}
            onChange={(e) => setNuevaTarea(e.target.value)}
          />
          <button type="submit">Agregar</button> {/* Cambiar el tipo de botón a "button" */}
        </form>
      </div>
      <ul>
        {Array.isArray(tareasState) ? (
          tareasState.map((tarea, index) => (
            <li key={index}>
              {tarea}
              
              
              <ul>
              <input type="checkbox"
              checked ={tarea}
              onChange={()=> seleccionarTarea(index)} />
              <ul>
              <button onClick={() => eliminarTarea(index)}>Eliminar</button>
              </ul>
              <li>
              <button onClick={() => marcarComoCompletada(index)}>Completada</button>
              </li>
              </ul>
              </li>
            
          ))
        ) : (
          <li>En el espacio siguiente agregar su nueva tarea⏬</li>
        )}
      </ul>
      
    </div>
  );
};

export default Tareas;





// import React from 'react';

// const Tareas = ({ tareas }) => {
//   return (
//     <div>
//       <h1>Listado de Tareas</h1>
//       <ul>
//         {tareas.map((tarea, index) => (<li key={index}>{tarea}</li>
//         ))};
//       </ul>
//     </div>
//   );
// };

// export default Tareas;
