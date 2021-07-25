const express=require('express');

const Products=require('../../Models/Products');


const route=express.Router();

route.get('/',async (req,res)=>{
    try{
        const products=await Products.find();
        res.status(200).json({products})

    }catch(err){
        res.status(500).json({error:"Something went wrong"})

    }
})

module.exports=route