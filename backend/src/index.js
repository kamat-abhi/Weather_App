const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const rateLimit = require('express-rate-limit')


const {PORT} = require('./config/serverConfig');
const Apiroutes = require('./routes/index')


const  setUpAndStartServer = () => {
    const app = express();
    app.use(cors());
    const limiter = rateLimit({
        windowMs: 2 * 60 * 1000,
        max: 10
    })

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true}));
    app.use(limiter);

    app.use('/api', Apiroutes);

    app.listen(PORT, () => {
        console.log(`server started at PORT:${PORT}`);
    })


}

setUpAndStartServer();