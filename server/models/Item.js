import mongoose from "mongoose";
const itemSchema=new mongoose.Schema({title:{type:String,required:true,trim:true,maxlength:100},description:{type:String,required:true,trim:true,maxlength:500},imageUrl:{type:String,default:""}},{timestamps:true});
export default mongoose.model("Item",itemSchema);
