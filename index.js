const express = require("express");
const morgan = require("morgan");
const loger = require("./utils/logger");
const app = express();
const middlewares = require("./api/middlewares/middlewares");
require("./api/persistance/connection/connection");

//SETTINGS
app.set("port", process.env.PORT || 3000);

//MIDDLEWARES
app.use(morgan("dev"));
app.use(express.json());
//ROUTES
app.use("/",require("./router/router"));

//STAR SERVER
app.listen(app.get("port"), () => {
    loger.info(`Server running at ${app.get("port")}`);
})