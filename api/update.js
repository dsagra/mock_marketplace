// Soporta PUT y CORS básico para que puedas llamarlo desde el navegador.
module.exports = (req, res) => {
  // CORS (ajustá el origin si querés restringirlo)
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'PUT, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  // Preflight
  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  if (req.method !== 'PUT') {
    return res.status(405).json({
      success: false,
      message: 'Método no permitido. Usa PUT.',
    });
  }

  const { id, data } = req.body || {};

  if (!id || !data) {
    return res.status(400).json({
      success: false,
      message: 'Faltan parámetros: id o data',
    });
  }

  return res.status(200).json({
    success: true,
    message: 'Recurso actualizado correctamente',
    updated: {
      id,
      data,
      updatedAt: new Date().toISOString(),
    },
  });
};
