
//express instalation
const exp=require('express')
var adminroutes=exp();
var bodyparser=require('body-parser')
adminroutes.use(bodyparser.json());


///importing database connection
const getDb=require('../dbconfig.js').getDb
const initDb=require('../dbconfig.js').initDb

initDb();



//view owner registered details
adminroutes.get('/registration',(req,res)=>
{
  
    dbo=getDb()
    //console.log(req.body)
   dbo.collection("saikumarcollection").find().toArray((err,housearray)=>
   {
       if(err)
       {
           console.log('errr in reading data')
          // console.log(err)
       }
       else if (housearray.length==0)
       {
        res.json({'message':'student not found'})
       }
       else
       {
           res.json({"message":housearray})
       }
   })
})





//view tenant registered details
adminroutes.get('/registration2',(req,res)=>
{
  
    dbo=getDb()
    //console.log(req.body)
   dbo.collection("register2collection").find().toArray((err,housearray)=>
   {
       if(err)
       {
           console.log('errr in reading data')
           console.log(err)
       }
       else if (housearray.length==0)
       {
        res.json({'message':'student not found'})
       }
       else
       {
           res.json({"message":housearray})
       }
   })
})





//exporting admin routes

module.exports=adminroutes;
