const mongoose = require("mongoose");

const connect = () => {
    console.log("mongodb connection requested !");
    return mongoose.connect("mongodb://127.0.0.1/FoodDeliveryApp");
};

module.exports = {
    connect
}