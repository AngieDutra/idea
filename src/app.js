// Express
const express = require('express');
const app = express();

// Paths
const path = require('path');

// Server
app.set("port", process.env.PORT || 3000);
app.listen(app.get('port'), ()=> console.log('Server en http://localhost:' + app.get('port')));

// Settings
    // Public folder
app.use(express.static(path.resolve(__dirname, '../public'))); 
    // Views folder
app.set("views", path.resolve(__dirname, "./views"));
    // View Engine
app.set("view engine", "ejs");

// Middleware Aplicación
    // Estilos css globales
    app.use(require('./middlewares/styles'));

// Routes
    // Index
    const mainRoutes = require('./routes/mainRoutes.js');
    app.use('/', mainRoutes);