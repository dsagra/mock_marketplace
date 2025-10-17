export default function handler(req, res) {
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

  // Generar delay aleatorio entre 100ms y 2000ms
  const randomDelay = Math.floor(Math.random() * (2000 - 100 + 1)) + 100;

  // Simular delay antes de responder
  setTimeout(() => {
    // Respuesta fija
    const response = {
      products: [
        {
          productCode: "SEGURO_DE_HOGAR",
          status: "AVAILABLE",
          additionalData: {
            productPageData: [
              {
                fieldTitle: "Un valor",
                fieldValue: "2039",
              },
            ],
          },
        },
      ],
    };

    return res.status(200).json(response);
  }, randomDelay);
}
