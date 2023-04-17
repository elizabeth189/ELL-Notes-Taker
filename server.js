const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const apiRoutes = require('./routes/api.js');
const notesRoutes = require('./routes/notes');

app.use(express.urlencoded({ extended: true }));

// parse JSON 
app.use(express.static('public'));
app.use(express.json());
app.use('/api', apiRoutes);
app.use('/', notesRoutes);

// start server
app.listen(PORT, () => {
    console.log(`API server now running on port ${PORT}`)
});