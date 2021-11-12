const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const studentSchema=new Schema({
    fullname:{
        type:String

    },
    mobile:{
        type:Number
    }
})

mongoose.model('StudentDetails', studentSchema);