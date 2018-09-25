const Max = require('max-api');
const APIHandler = require('./lib/APIHandler');
console.log('app started')

Max.addHandler("search", async (cityName) => {
	const { data } = await APIHandler.lookUpCurrentWeatherIn(cityName);
	console.log(data);
	Max.outlet(data);
});

