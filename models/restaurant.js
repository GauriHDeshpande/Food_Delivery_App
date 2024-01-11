const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema({
    name: {
        type: String,
        required:true
    },
    address: {
        type: String,
    },
    food: [
        {
            type: mongoose.Schema.Types.ObjectId, //Through this we can have multiple food items in our restaurant model
            ref: 'Food'
        }
    ]
});

const restaurantModel = new mongoose.model('Restaurant', restaurantSchema);

module.exports = restaurantModel;