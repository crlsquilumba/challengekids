import React from 'react';
import ListaRetosEjecutor from './listaRetosEjecutor';
import { css } from '@emotion/react';
import { Card_1, Card_2, Formulario } from '@/components/ui/Formulario';
import Layout from '@/components/Layout';

const PomodoroPage = () => {
    return (
        <div
            css={css`
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
        `}
        >
            <Layout>
                <Formulario>
               

                    <ListaRetosEjecutor />
                

                </Formulario>
            </Layout>
        </div>
    );
};

export default PomodoroPage;
