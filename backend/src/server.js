const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');

app.set('port', process.env.port || 4000);
app.use(morgan('dev'));
app.use(express.json());
app.use(cors())
app.use(express.urlencoded({ extended: false }));
app.use("/api/employees", require('./routes/employees.routes'));

module.exports = app;