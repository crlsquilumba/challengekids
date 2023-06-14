import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Layout from '@/components/Layout';
import { Tabla } from '@/components/ui/Tabla';

const Listaretos = () => {
  const [retos, setRetos] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:3001/retos')
      .then((response) => response.json())
      .then((data) => setRetos(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <Layout>

        <fieldset>

          <h1 className="text-2xl font-bold mt-8 ">Misiones</h1>

          <table id="example" className="stripe hover" >
            <thead>
              <tr>


                  <th className="bg-green-800 text-white ">ID</th>
                  <th className="border-b bg-green-800">Nombre</th>
                  <th className="border-b bg-green-800">Descripción</th>
                  <th className="border-b bg-green-800">Edad</th>
                  <th className="border-b border-gray-300">Acción</th>
                </tr>
              </thead>
              <tbody>
                {retos.map((reto) => (
                  <tr key={reto.id}>
                    <td className="border-b bg-green-800 bg-blend-color:red">{reto.id}</td>
                    <td className="border-b border-gray-300">{reto.nombre}</td>
                    <td className="border-b border-gray-300">{reto.descripcion}</td>
                    <td className="border-b border-gray-300">{reto.edad}</td>
                    <td className="border-b border-gray-300">
                      <button className="px-4 py-2 bg-red-500 text-white rounded mr-2">Editar</button>
                      <button className="px-4 py-2 bg-red-500 text-white rounded">Cancelar</button>
                    </td>
                  </tr>
                ))} </tbody>
                </table>
              </fieldset>
      
      
      
            </Layout>


            </>
  );
};


export default Listaretos;
