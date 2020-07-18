const express = require('express');
const routes = require('./routes');
const validacors = require('cors')

const app = express();

app.use(validacors());

app.use(express.json());
app.use(routes);


app.listen(3333);