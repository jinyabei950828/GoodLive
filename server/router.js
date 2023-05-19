const express = require("express")
const router = express.Router()
const homehot = require("./data/home/homeHot")
const url = require("url")

router.get("/home/hot1",(req,res)=>{
  const cityName = url.parse(req.url,true).query.cityName
  res.send({
    status:200,
    result:homehot.hot1,
    city:cityName
  })
})

router.get("/home/hot2",(req,res)=>{
  const cityName = url.parse(req.url,true).query.cityName
  res.send({
    status:200,
    result:homehot.hot2,
    city:cityName
  })
})

module.exports =  router