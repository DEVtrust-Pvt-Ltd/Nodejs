/* eslint-disable*/
import http from "http";
import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import morgan from "morgan";
import path from "path";
import glob from "glob";
import bodyParser from "body-parser";

dotenv.config({
    path: './.env'
})
const app = express();
app.server = http.createServer(app);

// logger
app.use(morgan("dev"));
app.use(cors());

// 3rd party middleware
app.use(cors({
    exposedHeaders: process.env.corsHeaders
}));
app.use(bodyParser.json({
    limit: process.env.bodyLimit
}));
app.use(bodyParser.urlencoded({
    extended: true,
    limit: process.env.bodyLimit

}));

const initRoutes = (app) => {
    // including all routes
    glob("./routes/*.js", {
        cwd: path.resolve("./src")
    }, (err, routes) => {
        if (err) {
            console.log("Error occured including routes");
            return;
        }
        routes.forEach((routePath) => {
            require(routePath).default(app); // eslint-disable-line
        });
        console.log("included " + routes.length + " route files");
    });
};

initRoutes(app);
app.listen(process.env.PORT);
console.log("Started on port " + (process.env.PORT));

// Show unhandled rejections
process.on('unhandledRejection', function(reason, promise) {
    console.log(promise);
});
export default app;