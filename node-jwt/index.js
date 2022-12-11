const { response } = require("express");
var express = require("express");
const app = express();

/* JWT token */
var jwt = require("jsonwebtoken");
const secretKey = "secretkey";

/* Simple API call */
app.get("/", (req, res) => {
  res.json({
    message: "A simple API",
  });
  res.end();
});

/* API for the login hit and get jwt token */
app.post("/login", (req, res) => {
  const user = {
    id: 2,
    username: "koushikcse2008",
    username: "koushikcse2008",
    email: "koushikcse2008@gmail.com",
    mobile: "9239357171"
  };
  jwt.sign({ user }, secretKey, { expiresIn: "300s" }, (err, token) => {
    res.json({ token });
  });
});

/* Get the profile information  with jwt token verify */
app.post("/profile", verifytoken, (req, res) => {
  jwt.verify(req.token, secretKey, (err, authData) => {
    if (err) {
      res.send({ result: "Invalid token" });
    } else {
      res.json({
        message: "Profile accessed",
        authData,
      });
    }
  });
});

/* Taking token from the api header call */
function verifytoken(req, res, next) {
  const bearerHeader = req.header("Authorization");
  if (typeof bearerHeader !== "undefined") {
    const bearer = bearerHeader.split(" ");
    const token = bearer[1];
    req.token = token;
    next();
  } else {
    res.send({ result: "Token not valid" });
  }
}

app.listen(4000, () => {
  console.log("Server running on 4000");
});
