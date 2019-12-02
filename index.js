const express = require("express");
const morgan = require("morgan");
const loger = require("./utils/logger");
const app = express();
const middlewares = require("./api/middlewares/middlewares");
const token = require("./api/middlewares/tokens");
var cors = require('cors')


//AUN NO QUEDAN
const whiteList = ['http://localhost:3000/LogIn'];
const blackList = [];

require("./api/persistance/connection/connection");

//SETTINGS
app.set("port", process.env.PORT || 3000);

//MIDDLEWARES
app.use(morgan("dev"));
app.use(express.json());
app.use(cors()) // Use this after the variable declaration
//app.use(middlewares.tokenMiddleware);
//ROUTES
app.use("/",require("./router/router"));


//STAR SERVER
app.listen(app.get("port"), () => {
    loger.info(`Server running at ${app.get("port")}`);
})