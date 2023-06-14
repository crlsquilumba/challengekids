import styled from '@emotion/styled';

export const Formulario = styled.form`
    max-width: 600px;
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




export const Card_2 = styled.div`
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(4, 1fr);
  width: 390px;
  height: 220px;
  font-family: 'Trebuchet MS', sans-serif;
  &:hover {
    transform: scale(1.1);
    transition: 0.3s;
  }
`;

export const FormContainer = styled.div`
  position: relative;
  width: 350px;
  height: 100%;
  border-radius: 20px;
  padding: 40px;
  background: #ecf0f3;
  box-shadow: 14px 14px 20px #cbced1, -14px -14px 20px white;
`;
export const Inputs = styled.div`
  text-align: left;
  margin-top: 10px;
`;

export const Label = styled.h4`
  display: block;
  width: 100%;
  padding: 0;
  border: none;
  outline: none;
  box-sizing: border-box;
  margin-bottom: 4px;
  margin-top: 12px;
  font-family: 'Josefin Sans', sans-serif;
`;

export const Input = styled.input`
  display: block;
  width: 100%;
  padding: 0;
  border: none;
  outline: none;
  box-sizing: border-box;
  background: #ecf0f3;
  padding: 10px;
  padding-left: 20px;
  height: 45px;
  font-size: 14px;
  border-radius: 50px;
  box-shadow: inset 6px 6px 6px #cbced1, inset -6px -6px 6px white;
  &:placeholder {
    color: gray;
  }
`;


"styles/emotion/card1"

export const Card_1 = styled.div`
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(4, 1fr);
  width: 600px;
  height: 220px;
  font-family: 'Trebuchet MS', sans-serif;
  &:hover {
    transform: scale(1.1);
    transition: 0.3s;
  }
`;

export const ColorGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 150px);
  grid-template-rows: repeat(8, 50px);
  grid-gap: 8px;
  width: 150px;
  height: 400px;
  transform: rotate(-45deg);
`;


export const InfoGrid = styled.div`
grid-column: 1/6;
grid-row: 1/4;
z-index: 2;
width: 100%;
height: 100%;
background-color: rgba(255, 255, 255, 0.363);
box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.432);
border-radius: 6px;
font-size: 1rem; /*12px;*/
display: grid;
grid-template-columns: 15px repeat(3, 1fr) 15px;
grid-template-rows: repeat(3, 1fr);
line-height: 1px;
margin-=top: 50px;
`; 
 
export const Name = styled.h2`
  grid-column: 1 / span 2;
  grid-row: 1 / span 1;
  font-size: 1.2em;
  letter-spacing: 0.1rem;
  margin-top: 15px;
  font-size: 20px;
  background: transparent;
`;


export const Brand = styled.p`
  grid-column: 2 / span 2;
  grid-row: 1 / span 1;
  font-size: 1.2em;
  letter-spacing: 0.1rem;
  margin-top: 15%;
  margin-left: -28%;
  background: yellow;
`;

export const Address = styled.div`
  grid-column: 1 / span 2;
  grid-row: 4;
  margin-left: -35%;
  background: transparent;
`;


export const PhoneNumber = styled.div`
  grid-column: 3 / span 2;
  grid-row: 3;
  text-align: end;
  background: transparent;
`;

export const Email = styled.div`
  grid-column: 3 / span 2;
  grid-row: 4;
  text-align: end;
  background: transparent;
`;

export const CardText = styled.p`
  font-size: 1em;
  letter-spacing: 0.1rem;
`;


export const Back = styled.div`
  height: 220px;
  width: 390px;
  box-shadow: 2px 5px 15px 0px #17161694;
  margin-top: 10%;
  display: flex;
  flex-wrap: wrap;
`;
 

export const NameTag = styled.div`
   margin-top: 0px;
   width: 100%;
   height: 40%;
   box-shadow: 2px 5px 15px 0px #17161694;
   margin-top: 17%;
    background:  rgba(255, 255, 255, 0.363)

`;


export const TextLg = styled.h1`
  margin: 2px;
  font-weight: 200px;
  font-size: 30px;
  font-family: 'Heebo', sans-serif;
`;

export const TextSm = styled.p`
  margin: 2px;
  font-weight: 100px;
  font-size: 15px;
  font-family: 'Heebo', sans-serif;
`;



export const Purple = styled.div`
  background-color: #871F78;
  grid-column: 8 / span 5;
  grid-row: 1 / span 4;
`;

export const Yellow2 = styled.div`
  background-color: #F2B900;
  grid-column: 1 / span 7;
  grid-row: 1 / span 4;
`;

export const Pink2 = styled.div`
  background-color: #fa001a;
  -webkit-clip-path: polygon(0% 0%, 100% 0%, 0% 100%);
  clip-path: polygon(0% 0%, 100% 0%, 0% 100%);
  grid-row: 1 / span 3;
  grid-column: 1 / span 11;
  position: relative;
  z-index: 2;
`;

export const Dots2 = styled.div`
  background: radial-gradient(#fa001a 20%, transparent 19%),
    radial-gradient(#fa001a 20%, transparent 19%), transparent;
  background-size: 6px 6px;
  background-position: 0 0, 3px 3px;
  grid-column: 1 / span 12;
  grid-row: 3 / span 2;
  margin: 0 0 15px 20px;
  z-index: 1;
`;

export const Intro = styled.div`
  background: black;
  color: white;
  display: flex;
  flex-direction: column;
  grid-column: 4 / span 6;
  grid-row: 2 / span 2;
  justify-content: center;
  text-align: center;
  z-index: 3;
`;

export const FrontName = styled.p`
  letter-spacing: 1px;
  text-transform: uppercase;
  font-size: 18px;
`;

export const FrontBrand = styled.p`
  letter-spacing: 1px;
  text-transform: uppercase;
  font-size: 8px;
  margin-top: 5px;
`;


export const Back2 = styled.div`
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  margin-top: 6%;
  margin-left: 6%;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(12, 1fr);
  height: 215px;
  width: 100%;
  &:hover {
    transform: scale(1.1);
  }
`;

export const BackYellow = styled.div`
  background-color: #f1ef1c;
  grid-column: 1 / span 9;
  grid-row: 1 / span 3;
`;

export const BackTopDots = styled.div`
  background: radial-gradient(#4cc9c8 20%, transparent 19%),
    radial-gradient(#4cc9c8 20%, transparent 19%), transparent;
  background-size: 6px 6px;
  background-position: 0 0, 3px 3px;
  grid-column: 8 / span 6;
  grid-row: 2 / span 3;
`;

export const BackInfo = styled.div`
  grid-column: 2 / span 6;
  grid-row: 5 / span 6;
`;

export const BackName = styled.p`
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 1px;
  text-transform: uppercase;
`;

export const BackBrand = styled.p`
  font-size: 12px;
  margin-bottom: 15px;
`;

export const BackText = styled.p`
  font-size: 12px;
  margin-bottom: 15px;
`;

export const BackDots = styled.div`
  background: radial-gradient(#4cc9c8 20%, transparent 19%),
    radial-gradient(#4cc9c8 20%, transparent 19%), transparent;
  background-size: 6px 6px;
  background-position: 0 0, 3px 3px;
  grid-column: 1 / span 8;
  grid-row: 11 / span 2;
  z-index: 2;
`;

export const BackkPink = styled.div`
  background-color: #fa001a;
  grid-column: 8 / span 5;
  grid-row: 10 / span 3;
`;

export const TimerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: Purple;
  padding: 2rem;
  border-radius: 8px;
`;

export const ClockImage = styled.img`
  width: 200px;
  margin-bottom: 2rem;
`;

export const StartButton = styled.button`
  background-color: green;
  color: #ffffff;
  padding: 1rem 1rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ff0044;
  }
`;

export const FinishButton = styled.button`
  background-color: red;
  color: #ffffff;
  padding: 1rem 1rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #009933;
  }
`;

export const ModalOverlay = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalContent = styled.div`
  background-color: #ffffff;
  padding: 2rem;
  border-radius: 8px;
`;

export const ModalTitle = styled.h2`
  color: #ff3366;
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

export const ModalText = styled.p`
  color: #333333;
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;

export const ModalButtons = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;

export const ModalButton = styled.button`
  background-color: #ff3366;
  color: #ffffff;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin: 0 0.5rem;

  &:hover {
    background-color: #ff0044;
  }
`;


export const CardContent = styled.div`
border-radius: 20px;
padding: 10px;
background: #ecf0f3;
box-shadow: 14px 14px 20px #cbced1, -14px -14px 20px white;
background-color: #ffffff;
  padding: 1rem;
  border-radius: 8px;
  &:hover {
    background-color: #dc9bfa;
    cursor: pointer;
    transform: scale(1.1);
    transition: 0.1s;
  }
`;


export const CardContentReto = styled.div`
background-color: #dc9bfa;
border-radius: 20px;
padding: 10px;

box-shadow: 14px 14px 20px #cbced1, -14px -14px 20px white;

  padding: 1rem;
  border-radius: 8px;
  &:hover {  
    cursor: pointer;
  }
`;

export const CardButtonAgrupator = styled.div`
  background-color: #ecf0f3;
  padding: 1rem;
  border-radius: 8px;
`;


export const CardSeparatorVertical = styled.div`
  padding: 0.5rem;
`;

export const CardSeparatorHorizontal = styled.div` 
margin-right: 1em;
`;


export const CarTitle = styled.h2`
  color: black;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  font-weight: bold;
  text-transform: uppercase;
`;


export const CardContainer = styled.div`
  position: relative;
  width: 350px;
  height: 100px;
  border-radius: 20px;
  padding: 10px;
  background: #ecf0f3;
  box-shadow: 14px 14px 20px #cbced1, -14px -14px 20px white;

`;

