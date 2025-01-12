const express = require('express');
const cors = require('cors');
const router = require('./routes/route');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Middleware untuk melayani file statis
app.use(express.static('public'));

// Rute API
app.use('/api', router);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/movie.html`);
});
