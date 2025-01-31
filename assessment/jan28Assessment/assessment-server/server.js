const express = require('express');
const cors = require('cors');

const userRoutes = require("./Routes/UserRoute");
const hobbyRoutes = require("./Routes/HobbyRoute");

const app = express();
const userApp = express();
const hobbyApp = express();

app.use(cors());
app.use("/static", express.static("public"));
app.use(express.json({limit: '2mb'}));
app.use(express.urlencoded({ extended: false }));

app.use("/user", userApp);
userApp.use("/", userRoutes);

app.use("/hobby", hobbyApp);
hobbyApp.use("/", hobbyRoutes);

app.get("*", (req, res) => {
    res.status(404).send("Not Found");
})

app.listen(3001);