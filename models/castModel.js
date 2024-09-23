const mongoose=require('mongoose')
const castSchema = new mongoose.Schema({
    person:{
        type:mongoose.ObjectId,
        ref:'Person'
    },
        characterName:String,
        movie:{
            type:mongoose.ObjectId,
            ref:'Movie'
        }
});
const Cast = mongoose.model('Cast', castSchema);
module.exports=Cast