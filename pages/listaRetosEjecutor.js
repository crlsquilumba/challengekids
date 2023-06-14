import React, { useState, useEffect } from 'react';
import { CardText, CardSeparatorVertical, FinishButton, InfoGrid, FormContainer, StartButton, ModalOverlay, ModalContent, ModalTitle, ModalText, ModalButton, ModalButtons, CardContent, CardContainer, CardSeparatorHorizontal, CardButtonAgrupator, CarTitle, Yellow2, BackYellow, Purple, Brand, BackkPink, TimerContainer, BackTopDots, BackText, BackName, FrontBrand, FrontName, TextLg, PhoneNumber, Formulario } from '@/components/ui/Formulario';
import { useRouter } from 'next/router';
import Avatar from '@/components/ui/avatar';

import StarRating from '@/components/starRanking';
import Layout from '@/components/Layout';

const ListaRetorEjecutor = () => {
  const router = useRouter();
  const [retos, setRetos] = useState([]);
  useEffect(() => {
    fetch('http://127.0.0.1:3001/retos')
      .then((response) => response.json())
      .then((data) => setRetos(data))
      .catch((error) => console.error(error));
  }, []);


  const handleGuardarClick = async () => {

      return router.push('/retoEjecutor');
      
  };

  return (
    <>
      <Layout>
        <Formulario>
          <CardSeparatorVertical />
          <CardSeparatorVertical />
          <table id="retos" >
            <thead>
            </thead>
            <tbody>
              {retos.map((reto) => (
                <tr key={reto.id}>
                  <CardContent  onClick={handleGuardarClick}>
                    <CarTitle> {reto.nombre}</CarTitle>
                    <CardText>
                      {reto.descripcion}
                    </CardText>
                    <PhoneNumber><StarRating stars={reto.puntos} /></PhoneNumber>
                  </CardContent >
                  <CardSeparatorVertical />
                </tr>
              ))}
            </tbody>
          </table>
    </Formulario>
    </Layout>
    </>
  );
};
export default ListaRetorEjecutor;
