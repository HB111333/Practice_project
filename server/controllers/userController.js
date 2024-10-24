const asyncHandler = require("express-async-handler");
const bcrypt= require("bcrypt");
const User=
require("dotenv").config();
const registerUser = asyncHandler(async(req,res)=>{
  const{name , email, password,phoneNumber}=req.body;
  //check if all fieldfs are provided 
  if( )
})
