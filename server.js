const express = require('express');
const logger = require('morgan');
const indexRoutes = require('./routes/index');
const todosRoutes = require('./routes/todos');
const goalsRoutes = require('./routes/goals');
const journalsRoutes = require('./routes/journals');


const app = express();


app.set('view engine', 'ejs');
require('dotenv').config();
require('./config/database');

app.use(logger('dev'));
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRoutes);
app.use('/', journalsRoutes);
app.use('/goals', goalsRoutes);
app.use('/', todosRoutes);



app.use('*', (req, res) => {
    res.render('404', {title: '404 - Page Not Found'});
});

app.listen(3000, () => {
    console.log('express is listening on port:3000');
});