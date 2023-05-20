const express = require("express")
const router = express.Router()
const homehot = require("./data/home/homeHot")
const searchData = require("./data/search")
const detailsData = require('./data/details')
const commentData = require("./data/comment")
const OrderCommentData = require('./data/order')

const url = require("url")
const Mock = require("mockjs")
const Random = Mock.Random;


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

router.get("/search",(req,res)=>{
  const search = url.parse(req.url,true).query.search
  console.log(search)
  let data = Mock.mock({
    'hasMore':true,
    'data|5':[{
      id:Random.integer(),
      title:Random.csentence(5,8),
      house:"17/19层| 4室1厅 - 273.97 ㎡",
      price:"<h3>130000</h3>",
      rentType:Random.cword(2),
      img:Random.image('800x600', Random.color(), '#FFF', 'png', Random.cword(5))
    }]
  })
  res.send({
    status:200,
    result:data
  })
})

router.get("/details",(req,res)=>{
  const id = url.parse(req.url,true).query.id
  console.log(id)
  res.send({
    status:200,
    result:detailsData
  })
})

router.post("/login",(req,res)=>{
  const {username,password}=req.body
  if(username&&password){
    res.send({
      status:200,
      result:{
        token:"werqeqeqeqew21313131wewqeq",
        nick:username
      }
    })
  }else{
    res.send({
      status:400,
      msg:'用户名和密码错误'
    })
  }
})

router.get("/comment",(req,res)=>{
  const id = url.parse(req.url,true).query.id
  console.log(id)
  res.send({
    status:200,
    result:commentData
  })
})

router.get("/order/comment",(req,res)=>{
  const username = url.parse(req.url,true).query.username
  console.log(username)
  res.send({
    status:200,
    result:OrderCommentData
  })
})

router.post("/order/submit/comment",(req,res)=>{
  const {username,id,content} = req.body
  console.log(username,id,content)
  res.send({
    status:200,
    msg:'评价成功'
  })
})


module.exports =  router