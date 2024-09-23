const Cast = require("../models/personModel")

const getAllCasts=async(req,res)=>{
   const casts= await Cast.find({});
   res.json(casts)
}
const getCastById=async(req,res)=>{
    const cast=await cast.findById(req.params.castId).exec();
    res.json(cast)
}
const addCast=async(req,res)=>{
    const data=req.body
    const cast=new Cast(data)
    await cast.save()
    res.json(cast)
}
const updateCast=async(req,res)=>{
    const updatedCast=await Cast.findByIdAndUpdate(req.params.castId, req.body,{new:true})
    res.json(updatedCast)
}
const deleteCast=async(req,res)=>{
    await Cast.findByIdAndDelete(req.params.castId)
    res.send("Deleted")
}
module.exports={
    getAllCasts,getCastById,addCast,updateCast,deleteCast
}