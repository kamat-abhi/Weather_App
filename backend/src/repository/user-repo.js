const {User} = require('../models/index')


async function createUser(data){
    try {
        const response = await User.create(data);
        return response;
    } catch (error) {
        console.log('Something went wromg in repository layer');
        throw {error};
    }
}

module.exports = {
    createUser,
};