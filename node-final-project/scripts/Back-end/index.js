const express = require("express");
const app = express();
const mongoose = require("mongoose");
const routes = require("./routes/routes");
const cors = require("cors");
const bodyparser = require("body-parser");

// mongoose.connection.on('error', function (err) {
//   console.log(err);
// });

mongoose.connect("mongodb://localhost/my_database", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

app.use(bodyparser.urlencoded({ extended: false }));

app.use(bodyparser.json());

const corsOptions = {
  exposedHeaders: ["user-auth"],
};

app.use(cors(corsOptions));

// Atvaizduoti paveiksliukus iš serverio.
app.use("/uploads", express.static("uploads"));
app.use("/api/v1", routes);

app.listen(1111);
