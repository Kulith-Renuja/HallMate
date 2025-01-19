const mongoose = require("mongoose");
const hallschema = mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    maxcount :{
        type:Number,
        required:true
    },
    phonenumber :{
        type:Number
    },
    imageurls :[],
    currentbooking :[],
    type:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true,
    }
},{
    timestamps : true,
})
const HallModel = mongoose.model('halls',hallschema)

module.exports = HallModel