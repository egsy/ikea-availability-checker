const checker = require('ikea-availability-checker');

module.exports = async function() {
    const result = await checker.availability(store, item);
    return result;
};
