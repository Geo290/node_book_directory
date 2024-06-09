const express = require('express');
const {join} = require('path');
const {env} = require('process');

const app = express();
const routes = require('./routes/books.routes.js');
const path = require('path');

// set /views folder as source of html templates
app.set('views', join(__dirname, 'views'));

// set template engine
app.set('view engine', 'ejs');

// I still don't understand what does this middleware do
app.use((req, res, next) => {
    console.log(res);
    next();
});

// set our routes source
app.use(routes);

// set static files source
app.use('/public', express.static(join(__dirname, '/public')));

app.listen(env.PORT, () => {
    console.log(`SERVER LISTENING ON PORT ${env.PORT}`);
});