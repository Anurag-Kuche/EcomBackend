const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const path = require("path");

// Corrected the import path for mongoose connection
const db = require("./config/mongoose-connection");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.use("/owners",ownersRouter);
app.use("/users",usersRouter);
app.use("/products",productsRouter);


// Simple route to check the server
app.get("/", (req, res) => {
    res.send("Hey!");
});

// Added a console log to confirm server start
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
