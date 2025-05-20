
export async function GET(request) {
	
	const { searchParams } = new URL(request.url);
	const code = searchParams.get('code');
	// const REDIRECT_URI = 'https://mcl-clone.vercel.app/callback'
	const REDIRECT_URI = 'https://eager-exotic-grouse.ngrok-free.app/callback'

	if (!code) {
		return new Response(JSON.stringify({ error: 'Falta el código de autorización' }), {
			status: 400,
			headers: {
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': '*',
				'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
				'Access-Control-Allow-Headers': 'Content-Type',
			},
		});
	}

	try {
		const body = new URLSearchParams({
			grant_type: 'authorization_code',
			client_id: process.env.CLIENT_ID,
			client_secret: process.env.CLIENT_SECRET,
			code: code,
			redirect_uri: REDIRECT_URI
		});
    	
		const response = await fetch('https://api.mercadolibre.com/oauth/token', {
			method: 'POST',
			headers: {
				'accept': 'application/json',
				'content-type': 'application/x-www-form-urlencoded',
			},
			body: body.toString(),
		});

		if (!response.ok) {
			throw new Error(`Error de MercadoLibre`);
		}

		const tokenData = await response.json();

		console.log('tokenData: ', tokenData);

		return new Response(JSON.stringify({ token: tokenData }), {
			status: 200,
			headers: { 
				"Content-Type": "application/json",
				"Access-Control-Allow-Origin": "*",
				"Access-Control-Allow-Methods": "GET, POST, OPTIONS",
				"Access-Control-Allow-Headers": "Content-Type",
			},
		});
  	} catch (error) {
		console.error('Error al obtener el token:', error.message);
		return new Response(JSON.stringify({ error: 'Error al obtener el token', message: error.message }), {
			status: 500,
			headers: { 
				"Content-Type": "application/json",
				"Access-Control-Allow-Origin": "*",
				"Access-Control-Allow-Methods": "GET, POST, OPTIONS",
				"Access-Control-Allow-Headers": "Content-Type",
			},
		});
  	}
}

export async function OPTIONS() {
    return new Response(null, {
        status: 204,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        },
    });
}