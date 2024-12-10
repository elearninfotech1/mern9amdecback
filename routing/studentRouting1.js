let express = require("express");
let connection = require("../db/dbconnect");
let studentRouting = express.Router();

studentRouting.post("/student", (req, res) => {
  let { id, name, address } = req.body;
  let query1 = `insert into student(id,name,address) values ('${id}','${name}','${address}')`;
  let equery = connection.query(query1, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

studentRouting.get("/student", (req, res) => {
  let query1 = `select * from student`;
  let equery = connection.query(query1, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

studentRouting.delete("/student/:sid", (req, res) => {
  let sid = req.params.sid;
  let query1 = `delete from student where id='${sid}'`;
  let equery = connection.query(query1, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

studentRouting.get("/student/:sid", (req, res) => {
  let sid = req.params.sid;
  let query1 = `select * from student where id='${sid}'`;
  let equery = connection.query(query1, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

studentRouting.put("/student/:sid", (req, res) => {
  let { id, name, address } = req.body;
  let sid = req.params.sid;
  let query1 = `update student set id=${id},name='${name}',address='${address}' where id='${sid}'`;
  let equery = connection.query(query1, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

module.exports = studentRouting;
