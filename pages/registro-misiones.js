import React, { useState, useContext } from 'react';
import Layout from '@/components/Layout';
import { Formulario, Campo, InputSubmit, Error } from '@/components/ui/Formulario';
import useValidacion from '@/hooks/useValidacion';
import validarCrearMision from '@/validacion/validarCrearMision';
import { css } from '@emotion/react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const STATE_INICIAL = {
    nombre: '',
    descripcion: '',
    edad: 0,
    objetivo: ''


}


const RegistroMisiones = () => {

    const [error, guardarError] = useState(false);
    const { valores, errores, handleSubmit, handleChange, handleBlur } = useValidacion(STATE_INICIAL, validarCrearMision, registrarMision);
    const { nombre, descripcion, edad, objetivo } = valores;

    const [nombre2, setNombre] = useState('');
    const [descripcion2, setDescripcion] = useState('');
    const [edad2, setEdad] = useState('');
    const [objetivo2, setObjetivo] = useState('');
  
    const handleNombreChange = (e) => {
      setNombre(e.target.value);
    };
  
    const handleDescripcionChange = (e) => {
      setDescripcion(e.target.value);
    };
  
    const handleEdadChange = (e) => {
      setEdad(e.target.value);
    };
  
    const handleObjetivoChange = (e) => {
      setObjetivo(e.target.value);
    };
  

    // hook de routing para redireccionar
    const router = useRouter();


    async function registrarMision() {



        // si el usuario no esta autenticado llevar al login
        //if(!usuario) {
        //return router.push('/login');
        // }

        // crear el objeto de nuevo producto 
        const mision = {
            nombre,
            descripcion,
            edad,
            objetivo
        }

        // insertarlo en la base de datos
        // firebase.db.collection('productos').add(producto);

        return router.push('/');

    }


    const handleGuardarClick = async () => {
        try {
            console.log("Paso antes de grabar");
          const response = await fetch('http://127.0.0.1:3001/misiones', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ nombre, descripcion, edad, objetivo }),
          });
          console.log("response" + response.ok);
          if (response.ok) {
            alert('Misión guardada exitosamente');
            setNombre('');
            setDescripcion('');
            setEdad('');
            setObjetivo('');
            console.log("antes del push");
         
            return router.push('/misiones');
            
          } else {
            throw new Error('Error al guardar la misión');
          }
        } catch (error) {
          console.error(error);
          alert('Ocurrió un error al guardar la misión');
        }
      };

      
    return (
        <>
            <div>
                <Layout>
                    <div css={css`
      text-align: center;
      margin-top: 1rem;
    `}>
                        <h1>¡Título centrado!</h1>
                    </div>
                    <Formulario
                        onSubmit={handleSubmit}
                        noValidate
                    >
                        <fieldset>
                            {errores.nombre && <Error>{errores.nombre}</Error>}
                            <label className="absolute top-0 left-0 bg-blue-500 text-white py-1 px-1 rounded">
                                Nombre
                            </label>
                            <Campo>
                                <input
                                    type="text"
                                    id="nombre"
                                    placeholder="Nombre del Reto"
                                    name="nombre"
                                    value={nombre}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                            </Campo>
                            {errores.descripcion && <Error>{errores.descripcion}</Error>}
                            <label className="absolute top-0 left-0 bg-blue-500 text-white py-1 px-2 rounded">
                                Descripcion
                            </label>
                            <Campo>
                                <textarea
                                    id="descripcion"
                                    name="descripcion"
                                    value={descripcion}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                            </Campo>
                            {errores.edad && <Error>{errores.edad}</Error>}
                            <label className="absolute top-0 left-0 bg-blue-500 text-white py-1 px-2 rounded">
                                Edad
                            </label>
                            <Campo>
                                <input
                                    type="number"
                                    id="edad"
                                    placeholder="Edad niño"
                                    name="edad"
                                    value={edad}
                                    onChange={handleChange}
                                    onBlur={handleBlur}

                                />
                            </Campo>
                            {errores.objetivo && <Error>{errores.objetivo}</Error>}
                            <label className="absolute top-0 left-0 bg-blue-500 text-white py-1 px-2 rounded">
                                Objetivo
                            </label>
                            <Campo>
                                <input
                                    type="text"
                                    id="objetivo"
                                    placeholder="Objetivo de la mision"
                                    name="objetivo"
                                    value={objetivo}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                            </Campo>
                        </fieldset>
                        {error && <Error>{error} </Error>}
                        <InputSubmit
                            type="submit"
                            value="Crear Producto"
                        />
                         <button type="button" onClick={handleGuardarClick}>Guardar</button>
                    </Formulario>
                </Layout>
            </div>
        </>
    );
};

export default RegistroMisiones;
