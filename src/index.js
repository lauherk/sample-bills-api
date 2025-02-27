const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const dataSet = require("./dataSet");

let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}

// defining the Express app
const app = express();

// defining an array to work as the database (temporary solution)
//const ads = [{ title: "Hello, world (again)!" }];

// adding Helmet to enhance your API's security
app.use(helmet());

// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json());

// enabling CORS for all requests
app.use(cors());

// adding morgan to log HTTP requests
app.use(morgan("combined"));

// defining an endpoint to return all ads
app.get("/sample-data", (req, res) => {
  res.send(dataSet.sampleBillSet);
});

// starting the server
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
