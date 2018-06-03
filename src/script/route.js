let express=require('express');

let app=express();

let router=express.Router();

let reader=require('./reader');

router.get('/',function(req,res){
  
  let input='./input/data.csv';
  
  let json=new reader().readWrite(input);

  res.setHeader('Content-Type', 'application/json; charset=utf-8')

  res.status(200).send(json);
})
module.exports=router;