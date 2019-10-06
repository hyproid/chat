// Import require modules
const express     = require('express');
const bodyParser  = require('body-parser');

// Create an App
const app = express();
app.use(bodyParser.json());


// Routes
require('./routes/dialogFlowRoutes') (app);

if (process.env.NODE_ENV === 'production') {
    // js and css files
    app.use(express.static('client/build'));

    // index.html and for all page routes
    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
} else {
    // Local Server
    app.get('/', (req, res) => {
        res.send({'hello': 'Jai'});
    });
}

const port = process.env.PORT || 5000;
app.listen(port);
