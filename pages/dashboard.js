import { useState, useEffect } from 'react';



function Dashboard() {
  const [puntuacion, setPuntuacion] = useState(0);
  const [avances, setAvances] = useState([]);

  // Simulación de carga de datos desde una API o base de datos
  useEffect(() => {
    // Obtener puntuación del niño
    // Ejemplo: const puntuacion = obtenerPuntuacion();

    // Obtener avances de misiones
    // Ejemplo: const avances = obtenerAvances();

    // Actualizar estados
    // setPuntuacion(puntuacion);
    // setAvances(avances);
  }, []);

  const pieChartData = {
    labels: ['Misión 1', 'Misión 2', 'Misión 3'],
    datasets: [
      {
        data: [30, 50, 20],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  return (
    <div className="bg-blue-200 p-4">
      <h1 className="text-3xl font-bold mb-4">Dashboard de ChallengeKids</h1>

      <div className="bg-white p-4 rounded-md shadow-md mb-4">
        <h2 className="text-xl font-bold mb-2">Puntuación</h2>
        <p className="text-2xl">{puntuacion}</p>
      </div>

      <div className="bg-white p-4 rounded-md shadow-md">
        <h2 className="text-xl font-bold mb-2">Avances de Misiones</h2>
        {avances.length > 0 ? (
          <ul>
            {avances.map((avance) => (
              <li key={avance.id}>{avance.nombre}: {avance.progreso}% completado</li>
            ))}
          </ul>
        ) : (
          <p>No hay avances registrados</p>
        )}
      </div>

      <div className="bg-white p-4 rounded-md shadow-md mt-4">
        <h2 className="text-xl font-bold mb-2">Gráfico de Pastel</h2>
        
      </div>
    </div>
  );
}

export default Dashboard;
