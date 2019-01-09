const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const path = require("path");

const users = require("./client/routes/user");

const app = express();
app.use(passport.initialize());
require("./client/passport/passport")(passport);

var db = mongoose.connection;

//handeling mongo error
db.on("Error", console.log.bind(console, "Connection error:"));
db.once("open", function(){
  //  we're connected!
});

// Define middleware here
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

//Parse incoming requests
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.get("/", function(req, res) {
    res.send("hello");
})

const PORT = process.env.PORT || 5000;

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
app.use("/api/users", users);

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

//connect to Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/budgetUsers");

app.listen(PORT, () => {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
