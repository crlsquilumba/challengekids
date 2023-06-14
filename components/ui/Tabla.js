import styled from '@emotion/styled';

export const Tabla = styled.form`
    max-width: 1200px;
    width: 95%;
    margin: 0rem auto 0 auto;

    fieldset {
        margin: rem 0;
        border: 1px solid #e1e1e1;
        font-size: 2rem;
        padding: 1rem;
    }
`;

export const Campo = styled.div`
    margin-bottom: 1rem;
    display: flex;
    align-items: center;

    label {
      
        font-size: 1.5rem;
    }

    input, 
    textarea {
        flex: 1;
        padding: 1rem;
    }
    textarea {
        height: 200px;
    }
`;

export const InputSubmit = styled.input`
    background-color: green;
    width: 100%;
    padding: 1.5rem;
    text-align: center;
    color: #FFF;
    font-size: 1.8rem;
    text-transform: uppercase;
    border: none;
    font-family: 'PT Sans', sans-serif;
    font-weight: 700;

    &:hover {
        cursor: pointer;
    }
`;

export const Error = styled.p`
    background-color: red;
    padding: 1rem;
    font-family: 'PT Sans', sans-serif;
    font-weight: 700;
    font-size: 1.4rem;
    color: #FFF;
    text-align: center;
    text-transform: uppercase;
    margin: 2rem 0;
`;
export const Boton = styled.button`
background-color: red;
    display: block;
    font-weight: 700;
    text-transform: uppercase;
    border: 1px solid #d1d1d1;
    padding: .8rem 2rem;
    mr-3
    margin: 2rem auto; 
    text-align: center;
    background-color: ${props => props.color ? '#DA552F' : 'green'};
    color: ${props => props.color ? 'white' : 'white'};
    &:last-of-type {
        margin-right:0;
    }
    

    &:hover {
        cursor: pointer;
    }
`;