const express = require("express");
const dotenv = require("dotenv");
const emailRoutes = require("./routes/emailRoutes");
const path = require("path");

const app = express();
dotenv.config();

const cors = require("cors");
const exp = require("constants");
const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(cors()); // Use this after the variable declaration

app.use(express.json()); // tell the server to accept the json data from frontend

//Signup and login
app.use("/email", emailRoutes);

const PORT = process.env.PORT || 8000; // Default port if not defined
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
