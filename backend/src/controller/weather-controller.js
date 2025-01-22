const WeatherService = require('../service/weather-service');


const getWeather = async (req, res) => {
    try {
        const response = await  WeatherService.createuser({
            username: req.query.username,
            url: req.connection.remoteAddress,
            location: req.query.place
        });        
        return res.status(200).json({
            data: response
        })
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Something went wrong",
            err: error
        })
    }
}


module.exports = {
    getWeather
}