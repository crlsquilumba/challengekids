import React, { useEffect, useState } from 'react';

import RetosCard from '../../challengekids/pages/RetosCard';
import Layout from '@/components/Layout';
import Card from '../../challengekids/pages/RetosCard';
import { Brand, Card_1, Card_2, Dots2, ColorGrid, FormContainer, Formulario, Input, Inputs, Label, Pink2, Purple, Yellow2 } from '@/components/ui/Formulario';
import { useRouter } from 'next/router';
const Retos = () => {
  const [retos, setRetos] = useState([]);

  const router = useRouter();

  useEffect(() => {
    fetch('http://127.0.0.1:3001/retos')
      .then((response) => response.json())
      .then((data) => setRetos(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
       <Layout>
      

    

          <table id="example" className="stripe hover" >
            <thead>

            </thead>
            <tbody>
              {retos.map((reto) => (
                <tr key={reto.id}>
                  <Card_1 >

               
    
                   
                  
                    <td className="border-b border-gray-300">
                    <Brand>
                    {reto.nombre}
                    </Brand>
                    </td>
                    <td className="border-b border-gray-300">{reto.descripcion}</td>
                    <td className="border-b border-gray-300">{reto.edad}</td>
                    <Purple/>
                 
                  </Card_1>



                </tr>
              ))} </tbody>
          </table>
 

      </Layout>


    </>




  );
};

export default Retos;