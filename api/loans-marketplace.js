export default function handler(req, res) {
  // Variable para controlar si se aplica delay o no
  const enableDelay = true; // Cambiar a false para desactivar el delay
  
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

  // Generar delay aleatorio entre 100ms y 2000ms (solo si está habilitado)
  const randomDelay = enableDelay ? Math.floor(Math.random() * (2000 - 100 + 1)) + 100 : 0;

  // Simular delay antes de responder (si está habilitado)
  setTimeout(() => {
    // Respuesta fija
    const response = {
      products: [
        {
          productCode: "TARJETA_GS_CLASICA",
          status: "AVAILABLE",
          additionalData: null
        }
      ]
    };

    return res.status(200).json(response);
  }, randomDelay);
}
