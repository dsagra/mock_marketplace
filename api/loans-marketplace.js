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

  // Respuesta fija
  const response = {
    products: [
      {
        productCode: "PRESTAMO_VEHICULAR",
        status: "AVAILABLE",
        additionalData: {
          upysAmount: {
            to: 1000,
          },
          productPageData: [
            {
              fieldTitle: "Prestamos entregados",
              fieldValue: "100000",
            },
            {
              fieldTitle: "Autos Renovados",
              fieldValue: "20000",
            },
          ],
          productCustomTitle: "Subite a tu nuevo auto",
        },
      },
      {
        productCode: "PRESTAMO_DE_VIVIENDA",
        status: "ADQUIRED",
        additionalData: {
          upysAmount: {
            to: 1000,
          },
        },
      },
    ],
  };

  return res.status(200).json(response);
}
