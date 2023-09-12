// const url = 'https://wft-geo-db.p.rapidapi.com/v1/geo/adminDivisions';
export const geoApiOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '74d8a5d8b8mshf921a960ceddb62p11cbb5jsne40589a6d667',
		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
	}
};

export const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo"
export const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5";
export const WEATHER_API_KEY = 'e41c474e846ea5d6234df9be49b2e84e';

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }