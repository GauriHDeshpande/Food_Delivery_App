const express = require("express"); // This package returns a function using which we can initiate a new express application object.
const apiRouter = require("./routes/index");
const { connect } = require("./config/database");
const User = require("./models/user");

const app = express(); // executing the function using a new express application.

app.use("/api", apiRouter);

app.get('/', (req, res) => {
    res.status(200).send({
        success: true,
        message: "Successfully hitting the API.",
        data: {}
    });
});

app.listen(3004, async () => {
    await connect();
    console.log("Mongodb connected successfully.");
    // This call back will be executed anywhere the server starts.
    console.log("Server started successfully.");

    let user = await User.create({
        email:"abc@gmail.com",
        password:"12345",
        userName:"ABC"
    });
    console.log(user);
});
