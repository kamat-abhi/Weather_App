const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    Api_Key: process.env.Api_Key,
    PORT: process.env.PORT  
}