require("dotenv").config();
const express = require("express");
const app = express();
//....
const user = require("../routes/user");
const connection = require("./db");
//.....

app.use(express.json());
app.use("/api/user", user);
//....
(async () => await connection())();

app.use(express.json());
//....

// app.use(express.json());

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`CONNECTED TO ${port}...`))