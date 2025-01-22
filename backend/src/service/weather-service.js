const axios = require('axios');

const WeatherRepository = require('../repository/user-repo');

const { Api_Key } = require('../config/serverConfig');



async function createuser(data) {
    try {
        const response = await WeatherRepository.createUser(data);
        const weather = await axios.get('http://api.weatherapi.com/v1/current.json', {
            params: {
                key: Api_Key,
                q: data.location,
                aqi: 'no'
            }
        });
        console.log(response);
        console.log(weather.data.current.temp_c);
        return weather.data.current.temp_c;
    } catch (error) {
        console.log('error in fetching from weatherApi Server');
        throw {error};
    }
}

module.exports = {
    createuser
}