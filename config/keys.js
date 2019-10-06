// Load the correct configuration file.

if (process.env.NODE_ENV === 'production') {
    module.exports = require('./prod');
} else {
    // Load 'Dev' config.
    module.exports = require('./dev');
}
