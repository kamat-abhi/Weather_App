const express = require('express');

const userController = require('../../controller/weather-controller');

const router = express.Router();

router.get('/getWeather', userController.getWeather);
router.get('/get', (req, res) => {
    return res.status(200).json({
        message : "ok"
    })
})

module.exports = router;