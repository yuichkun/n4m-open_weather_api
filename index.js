const Max = require('max-api');
const APIHandler = require('./lib/APIHandler');

Max.addHandler("search", async (cityName) => {
	APIHandler.init();
	const { data } = await APIHandler.lookUpCurrentWeatherIn(cityName);
	console.log(data);
	Max.outlet(data);
});

