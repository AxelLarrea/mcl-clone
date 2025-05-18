
export async function GET(request) {
	
	const url = new URLSearchParams(window.location.search);
	const code = url.get('code');
	const REDIRECT_URI = 'https://mcl-clone.vercel.app/callback'

	try {
		console.log('entra');
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

		console.log('response: ', response);
		return new Response(JSON.stringify({ response }), {
			status: 200,
			headers: { 
				"Content-Type": "application/json",
				"Access-Control-Allow-Origin": "*",
				"Access-Control-Allow-Methods": "GET, POST, OPTIONS",
				"Access-Control-Allow-Headers": "Content-Type",
			},
		});
  	} catch (error) {
		console.error('Error al obtener el token:', error.response?.data);
		return new Response(JSON.stringify({ error: 'Error al obtener el token' }), {
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