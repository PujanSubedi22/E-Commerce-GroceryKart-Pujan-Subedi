import express from "express";
import dotenv from "dotenv";
import config from "./config/config.js";


const app = express();


app.get("/", (req, res)=> {
    res.json({
        name:config.name,
        port: config.port,
        version: config.version,
        status: "OK"
    });
});

app.listen(config.port, () => {
    console.log(`Server is running...at port ${config.port}`);
});