
export async function GET(request) {
	
	const { searchParams } = new URL(request.url);
	const token = searchParams.get('token');
    const query = searchParams.get('query');
    const encodedQuery = encodeURIComponent(query);
    const offset = searchParams.get('offset');
    const encodedOffset = encodeURIComponent(offset);
    const finalUrl = `https://api.mercadolibre.com/sites/MLA/search?q=${encodedQuery}&offset=${encodedOffset}`

	if (!token) {
		return new Response(JSON.stringify({ error: 'Falta el access token' }), {
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
		const response = await fetch(finalUrl, {
            method: 'GET',
            headers: {
               Authorization: `Bearer ${token}`,
               'Content-Type': 'application/json',
            }
        })

        console.log('response en getData: ', response);

		if (!response.ok) {
			const errorData = await response.json();
            throw new Error(`Error de MercadoLibre: ${errorData.message || response.statusText}`);
		}

		const requestData = await response.json();

        console.log('requestData en getData: ', requestData);

		return new Response(JSON.stringify({ data: requestData }), {
			status: 200,
			headers: { 
				"Content-Type": "application/json",
				"Access-Control-Allow-Origin": "*",
				"Access-Control-Allow-Methods": "GET, POST, OPTIONS",
				"Access-Control-Allow-Headers": "Content-Type",
			},
		});
  	} catch (error) {
		console.error('Error al obtener la data:', error.message);
		return new Response(JSON.stringify({ error: 'Error al obtener la data', message: error.message }), {
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