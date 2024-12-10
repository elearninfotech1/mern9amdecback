let express = require("express");
let connection = require("../db/dbconnect");
let signupRouting = express.Router();

signupRouting.post("/signup", async (req, res) => {
  let { id, name, email, password, phone, address } = req.body;
  let query1 = `insert into register(id, name, email, password, phone, address) values ('${id}','${name}','${email}','${password}','${phone}','${address}')`;
  let equery = connection.query(query1, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

signupRouting.post("/login", async (req, res) => {
  let { email, password } = req.body;
  let query1 = `select * from register where email='${email}' and password='${password}'`;
  let equery = connection.query(query1, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

module.exports = signupRouting;
