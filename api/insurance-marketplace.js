export default function handler(req, res) {
  // Variable para controlar si se simula timeout
  const simulateTimeout = false; // Cambiar a true para simular timeout
  
  // Configuración básica de CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'PUT, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Manejo del preflight
  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  // Solo aceptamos PUT
  if (req.method !== 'PUT') {
    return res.status(405).json({
      success: false,
      message: 'Método no permitido. Usa PUT.',
    });
  }

  // Si simulateTimeout está activado, nunca responder (causar timeout)
  if (simulateTimeout) {
    console.log('Simulando timeout - la petición nunca responderá');
    // No hacer nada, dejar que el cliente espere hasta su timeout
    return;
  }

  // Generar delay aleatorio entre 100ms y 2000ms (solo si está habilitado)
  const enableDelay = true;
  const randomDelay = enableDelay ? Math.floor(Math.random() * (2000 - 100 + 1)) + 100 : 0;

  // Simular delay antes de responder (si está habilitado)
  setTimeout(() => {
    // Respuesta fija
    const response = {
      products: [
        {
          productCode: "SEGURO_VIVIENDA",
          status: "AVAILABLE",
          additionalData: {
            productPageData: [
              {
                fieldTitle: "Valor asegurado",
                fieldValue: "2039",
              },
            ],
          },
        },
        {
          productCode: "SEGURO_VEHICULO",
          status: "AVAILABLE",
        },
      ],
    };

      // Lanzar error 500 para pruebas
      return res.status(200).json({
      response,
      });
  }, randomDelay);
}
