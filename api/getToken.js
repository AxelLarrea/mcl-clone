const axios = require('axios');

module.exports = async (req, res) => {
  try {
    // Obtén el token dinámicamente (esto es solo un ejemplo, ajusta según tu flujo)
    const response = await axios.post('https://api.mercadolibre.com/oauth/token', {
        grant_type: 'authorization_code',
        client_id: import.meta.env.VITE_CLIENT_ID,
        client_secret: import.meta.env.VITE_CLIENT_SECRET,
        code: 'TG-6827c0407270730001925472-479284578',
        redirect_uri: 'https://mcl-clone/callback',
        headers: { 
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json',
        },
    });

    const token = response.data.access_token;
    res.status(200).json({ access_token: token });
  } catch (error) {
    console.error('Error al obtener el token:', error.response?.data);
    res.status(500).json({ error: 'Error al obtener el token' });
  }
};