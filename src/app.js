const express = require("express");

const router = require("./router");

const app = express();

const mustache = require("mustache-express");

app.set('views', `${__dirname}/views`);

app.set('view engine', 'html');

app.engine("html", mustache());

app.use(express.json());

app.use(router);

module.exports = app;
