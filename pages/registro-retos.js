import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Layout from '@/components/Layout';
import { Formulario } from '@/components/ui/Formulario';

const RegistroRetos = () => {
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [misiones, setMisiones] = useState([]);
  const [id, setId] = useState('');

  useEffect(() => {
    // Obtener la lista de misiones desde el API
    fetch('http://127.0.0.1:3001/misiones')
      .then(response => response.json())
      .then(data => setMisiones(data))
      .catch(error => console.error(error));
  }, []);

  const handleGuardar = () => {
    // Guardar la información del reto utilizando el API
    const nuevoReto = {
      id,
      nombre,
      descripcion
    };

    fetch('http://127.0.0.1:3001/retos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(nuevoReto)
    })
      .then(response => response.json())
      .then(data => {
        console.log('Reto guardado:', data);
        // Limpiar los campos después de guardar
        setId('');
        setNombre('');
        setDescripcion('');
      })
      .catch(error => console.error(error));
  };

  const handleCancelar = () => {
    // Limpiar los campos al cancelar
    setId('');
    setNombre('');
    setDescripcion('');
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar el nuevo reto a la API
    console.log('Nuevo reto:', nombre, descripcion);
  };

  return (
    <div>
      <Layout>
        <Formulario>
          <h1>Registro de Retos</h1>
          <div className="my-4">
            <label htmlFor="mision">Misión:</label>
            <select
              id="mision"
              className="block border border-gray-300 rounded px-4 py-2 mt-2"
              value={id}
              onChange={(e) => setId(e.target.value)}
            >
              <option value="">Seleccionar Misión</option>
              {misiones.map((mision) => (
                <option key={mision.id} value={mision.id}>
                  {mision.nombre}
                </option>
              ))}
            </select>
          </div>
          <div className="my-4">
            <label htmlFor="nombre">Nombre:</label>
            <input
              id="nombre"
              type="text"
              className="block border border-gray-300 rounded px-4 py-2 mt-2"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>
          <div className="my-4">
            <label htmlFor="descripcion">Descripción:</label>
            <textarea
              id="descripcion"
              className="block border border-gray-300 rounded px-4 py-2 mt-2"
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
            />
          </div>
          <div className="my-4">
            <button
              className="px-4 py-2 bg-green-500 text-white rounded mr-2"
              onClick={handleGuardar}
            >
              Guardar
            </button>
            <button
              className="px-4 py-2 bg-red-500 text-white rounded"
              onClick={handleCancelar}
            >
              Cancelar
            </button>
          </div>
        </Formulario>
      </Layout>
    </div>
  );
};

export default RegistroRetos;
