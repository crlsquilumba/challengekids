import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Layout from '@/components/Layout';
import { useRouter } from 'next/router';
import { Tabla, Boton, Campo, InputSubmit, Error } from '@/components/ui/Tabla';

const Misiones = () => {
  const [misiones, setMisiones] = useState([]);

  const router = useRouter();

  useEffect(() => {
    fetch('http://127.0.0.1:3001/misiones')
      .then((response) => response.json())
      .then((data) => setMisiones(data))
      .catch((error) => console.error(error));
  }, []);


  const linkMision = () => {

    return router.push('/listaretos')


  }



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
              {misiones.map((mision) => (
                <tr key={mision.id}>

                  <td >

                    {mision.id}

                  </td>

                  <td >
                    {mision.nombre} </td>


                  <td >
                    {mision.descripcion} </td>


                  <td >{mision.edad}</td>


                  <td>


                    <Boton type="submit"
                      onClick={linkMision}>
                      Submit
                    </Boton>



                  </td>




                </tr>

              ))}
            </tbody>
          </table>
        </fieldset>



      </Layout>

    </>
  );
};

export default Misiones;
