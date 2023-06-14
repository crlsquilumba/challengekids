import { useState, useEffect } from 'react';
import tw from 'tailwind-styled-components';
import { css } from '@emotion/react';
import { useRouter } from 'next/router';
import Layout from '@/components/Layout';
import { CarTitle, CardContent, CardContentReto, CardSeparatorVertical, CardText, Formulario } from '@/components/ui/Formulario';
import clockIcon from '../public/images/clock-icon.gif';


const ProgressBar = tw.div`
  w-full h-4 bg-gray-200 rounded
`;

const FilledProgressBar = tw.div`
  h-full rounded bg-blue-500
`;

const LargeText = tw.h2`
  text-4xl font-bold mt-8
`;

const Button = tw.button`
  bg-blue-500 text-white py-2 px-4 rounded
`;

const ClockContainer = tw.div`
  flex items-center mb-4
`;

const ClockIcon = tw.img`
  w-6 h-6 mr-2
`;

const ClockText = tw.span`
  text-2xl font-bold
`;

const useRecordScore = (score) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const recordScore = async () => {
    setIsLoading(true);

    try {
      const response = await fetch('http://127.0.0.1:3001/retos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ score }),
      });

      if (!response.ok) {
        throw new Error('Error al grabar la puntuación');
      }
    } catch (error) {
      setError(error.message);
    }

    setIsLoading(false);
  };

  return { isLoading, error, recordScore };
};

const RetoEjecutor = () => {
  const [timer, setTimer] = useState(0);
  const [score, setScore] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [showScore, setShowScore] = useState(false);
  const [isClockStopped, setIsClockStopped] = useState(false);
  const { isLoading, error, recordScore } = useRecordScore(score);
  const router = useRouter();

  useEffect(() => {
    let intervalId;

    if (isRunning) {
      intervalId = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1);
      }, 1000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isRunning]);

  const handleStart = () => {
    setIsRunning(true);
    setShowScore(false);
    setIsClockStopped(false);
  };

  const handleStop = () => {
    setIsRunning(false);
    setScore((prevScore) => prevScore + Math.floor(timer / 60));
    setTimer(0);
    setShowScore(true);
    setIsClockStopped(true);

  };

  const progressWidth = (timer / 60) * 100;

  const handleAccept = async () => {
    await recordScore();
    router.push('/listaRetosEjecutor');
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <>
      <Layout>
        <CardSeparatorVertical />
        <CardSeparatorVertical />
        <CardContentReto>
          <div css={containerStyles}>
            <h1 css={headingStyles}>Reto Ejecutor</h1>
            <ClockContainer>

              <ClockIcon src={clockIcon.src} alt="Clock Icon" css={isClockStopped && clockStoppedStyles} />
              <ClockText>{formatTime(timer)}</ClockText>
            </ClockContainer>
            <ProgressBar>
              <FilledProgressBar css={css`width: ${progressWidth}%`} />
            </ProgressBar>
            {!isRunning ? (
              <Button css={buttonStyles} onClick={handleStart}>Start</Button>
            ) : (
              <Button css={buttonStyles} onClick={handleStop}>Stop</Button>
            )}
            {showScore && <LargeText>Puntos: {score}</LargeText>}
            {showScore && (
              <div>
                <Button onClick={handleAccept} disabled={isLoading}>
                  Aceptar
                </Button>
                {isLoading && <p>Enviando puntuación...</p>}
                {error && <p>Error: {error}</p>}
              </div>
            )}
          </div>
        </CardContentReto>
      </Layout>
    </>
  );
};

export default RetoEjecutor;

const containerStyles = css`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
`;

const headingStyles = css`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const buttonStyles = css`
  background-color: #4C51BF;
  color: white;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #1E40AF;
  }
`;

const clockStoppedStyles = css`
  filter: grayscale(100%);
  opacity: 0.5;
`;