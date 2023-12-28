const express = require("express"); // This package returns a function using which we can initiate a new express application object.
const app = express(); // executing the function using a new express application.
const apiRouter = require("./routes/index");

app.use("/api", apiRouter);

app.get('/', (req, res) => {
    res.status(200).send({
        success: true,
        message: "Successfully hitting the API.",
        data: {}
    });
});

app.listen(3004, () => {
    // This call back will be executed anywhere the server starts.
    console.log("Server started successfully.");
});
