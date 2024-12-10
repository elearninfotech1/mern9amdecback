let express = require("express");
let cors = require("cors");
require("./db/dbconfig");
let studentRouting = require("./routing/studentRouting");
const usersRouting = require("./routing/usersRouting");
const signupRouting = require("./routing/signupRouting");
const lnewsRouting = require("./routing/lnewsRouting");
const treatmentRouting = require("./routing/treatmentRouting");
let app = express();

app.use(cors());
app.use(express.json());
app.use("/", studentRouting);
app.use("/", usersRouting);
app.use("/", signupRouting);
app.use("/", lnewsRouting);
app.use("/", treatmentRouting);

app.get("/", (req, res) => {
  res.send("<h1>Sample Data</h1>");
});

app.listen(4000);
