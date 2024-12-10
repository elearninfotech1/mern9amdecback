let express = require("express");
let cors = require("cors");
const studentRouting = require("./routing/studentRouting1");
const signupRouting = require("./routing/signupRouting1");
let app = express();

app.use(cors());
app.use(express.json());

app.use("/", studentRouting);
app.use("/", signupRouting);

app.get("/", (req, res) => {
  res.send("<h1>Sample Data</h1>");
});

app.listen(4000);
