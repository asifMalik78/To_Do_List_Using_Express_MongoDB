// const bodyParser = require("body-parser");
const express = require("express");
const port = 8000;
// cons bodyParser
// const urlencodedParser = bodyParser.urlencoded({ extended: false });
const db=require('./config/mongoose');
const app = express();

app.set("view engine", "ejs");
app.set("views", "./views");
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('./assets'));

app.use("/" , require("./routes/home"));

app.listen(port, (err) => {
  if (err) {
    console.log(`Error : ${err}`);
    return;
  }

  console.log(`Serving is running on port no : ${port}`);
});
