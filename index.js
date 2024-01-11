const express = require("express"); // This package returns a function using which we can initiate a new express application object.
const apiRouter = require("./routes/index");
const { connect } = require("./config/database");
const User = require("./models/user");
const bodyParser = require("body-parser");
const passport = require("passport");
const authRouter = require("./routes/authRoutes");
require("./utils/auth");

const app = express(); // executing the function using a new express application.

app.use(bodyParser.urlencoded({extended:false}))
app.use("/api", passport.authenticate('jwt', {session: false}), apiRouter);
app.use("/", authRouter);

// app.use(function (err, req, res, next) {
//     res.status(err.status || 500);
//     res.json({
//         success: false,
//         error: err
//     })
// })

// app.get('/', (req, res) => {
//     res.status(200).send({
//         success: true,
//         message: "Successfully hitting the API.",
//         data: {}
//     });
// });

app.listen(3004, async () => {
    await connect();
    console.log("Mongodb connected successfully.");
    // This call back will be executed anywhere the server starts.
    console.log("Server started successfully.");
});
