//importing express
const exp=require('express')
var tenantroutes=exp();
var bodyparser=require('body-parser')
tenantroutes.use(bodyparser.json());

//authorization

const authorization=require('../middleware/authorization')



///importing database connection
const getDb=require('../dbconfig.js').getDb
const initDb=require('../dbconfig.js').initDb

initDb();

//bcrypt for hasing

const bcrypt=require('bcrypt')

///json web token

const jwt=require("jsonwebtoken")
const secretkey="secret2"



//edit2  tenant2 details2


// tenantroutes.post('/edit2',(req,res)=>
// {
//   dbo=getDb()
//   console.log('req.body');
//   if(req.body=={})
//   {
//       res.json({message:"no data found"})
//   }
//   else
//   {
//       dbo.collection('edit2collection').insertOne(req.body,(err,dataArray)=>
//       {
//           if(err)
//           {
//               console.log('error in sending')
//               console.log(err)
//           }
//           else
//           {
//               res.json({message:"documents inserted"})
//           }
//       })
//   }
// })




///modified data tenant edit details
tenantroutes.put('/modifytenant2',(req,res)=>
{ 
   // req.body=this.tenantprofile;
  dbo=getDb()
  console.log(req.body );
  dbo.collection("register2collection").updateMany({email:{$eq:req.body.email}},{$set:{name:req.body.name,email:req.body.email,mobile:req.body.mobile,city:req.body.city,dbo:req.body.dbo}},
    //{$set:{email:req.body.email}},
   // {$set:{mobile:req.body.mobile}},
   // {$set:{city:req.body.city}},
    //{$set:{dbo:req.body.dbo}},
    (err,success)=>
  {
      if(err)
      {
          console.log(err)
      }
      else
      {
          res.json({message:"success"})
      }
  })






})
  
    













////payments details tenant2 success
tenantroutes.post('/savedetails1',(req,res)=>
{
  dbo=getDb()
  console.log('req.body');
  if(req.body=={})
  {
      res.json({message:"no data found"})
  }
  else
  {
      dbo.collection('tenantpaymentscollection').insertOne(req.body,(err,dataArray)=>
      {
          if(err)
          {
              console.log('error in sending')
              console.log(err)
          }
          else
          {
              res.json({message:"documents inserted"})
          }
      })
  }
})





//payments history2 tenant2 



tenantroutes.get('/paymenthistory2',(req,res)=>
{req.params=this.tenantprofile;
  dbo=getDb()
    dbo.collection("tenantpaymentscollection").find({email:{$eq:req.params}}).toArray((err,dataArray)=>
      {
          if(err)
          {
              console.log('error in sending')
              console.log(err)
          }
          else if(dataArray.length==0)
          {
            res.json({"message":"no document found"})
          }
          else
          {
              res.json({"message":dataArray})
          }
      })
  
})


///message of owner to tenant after search new hosues


tenantroutes.get("/messageofowner",(req,res)=>
{  req.params=this.tenantprofile;
  dbo=getDb()
    dbo.collection("msgofownercollection").find({tenantemail:{$eq:req.params}}).toArray((err,dataArray)=>
      {
          if(err)
          {
              console.log('error in sending')
              console.log(err)
          }
          else if(dataArray.length==0)
          {
            res.json({"message":"no document found"})
          }
          else
          {
              res.json({"message":dataArray})
          }
      })
  
})






var tenantprofile ;

//login2 form  teant2 login form
tenantroutes.post('/login2',(req,res)=>
{console.log(req.body)
    dbo=getDb()
    
   dbo.collection("register2collection").find({email:{$eq:req.body.email}}).toArray((err,dataArray)=>{

    console.log(dataArray.length);
    if(dataArray.length==0)
    {
       res.json({'message':'invalid username'})
    }
    else if(dataArray[0].password!==req.body.password)
    {
        /*res.json({message:"invalid password"})*/

        //comparing bcrypt password to hashed password
        bcrypt.compare(req.body.password,dataArray[0].password,(err,result)=>
        {
            if(result==true)
            {
                //creating a send token
                const signedToken=jwt.sign({name:dataArray[0].name},secretkey,{expiresIn:"4000"})
                    console.log(signedToken)
                    //send signed token as responce after login 
                res.json({message:"success",token:signedToken,data:dataArray})
                this.tenantprofile=dataArray[0].email
            }
            else
            {
             res.json({message:"ivalid password"})
            }
        })
    }
    /*else
    {
        res.json({message:"success"})
    }*/
   })
        


})




//profile view after login speicfic tenant   (profile of tenant)
tenantroutes.get('/viewprofile2',(req,res)=>

{  req.body=this.tenantprofile;

   
    dbo=getDb()
   dbo.collection('register2collection').find({email:{$eq:req.body}}).toArray((err,dataArray)=>
   {
       if(err)
       { console.log(err)
           console.log('errr in reading data')
          
       }
       else if (dataArray.length==0)
       {
        res.json({'message':'student not found'})
       }
       else
       {
           res.json({"message":dataArray})
       }
   })
})





// /////tenant registrartion form 

// tenantroutes.post('/registerdetails',(req,res)=>
// {
//   dbo=getDb()
//   console.log(req.body)
//   if(req.body=={})
//   {
//       res.json({message:"no data found"})
//   }
//   else
//   {
//       bcrypt.hash(req.body.password,5,(err,hash)=>{
//           if(err)
//           {
//               console.log(err)
//           }
//           else
//           {
//               req.body.password=hash;

//               dbo.collection('register2collection').find({email:{$eq:req.body.email}}).toArray((err,dataArray)=>{
//                 if(err)
//                 {
//                     console.log(err)
//                 } 
//                 else
//                 {
//                     if(dataArray.length==0)
//                     {
  
//         dbo.collection('register2collection').insertOne(req.body,(err,dataArray)=>
//         {
//             if(err)
//             {
//                 console.log('error in sending')
//                 console.log(err)
//             }
//             else
//             {
//                 res.json({message:"documents inserted"})
//             }
//         })
//                     }
//                     else
//                     {
//                         res.json({message:"already existed"})
//                     }
//                 }
                
            
//               })


//   }
// })



//           }
//       })







/////tenant registrartion form 

tenantroutes.post('/registerdetails',(req,res)=>
{
  dbo=getDb()
  console.log(req.body)
  if(req.body=={})
  {
      res.json({message:"no data found"})
  }
  else
  {
      bcrypt.hash(req.body.password,6,(err,hash)=>{
          if(err)
          {
              console.log(err)
          }
          else
          {
              req.body.password=hash;

              dbo.collection("register2collection").find({email:{$eq:req.body.email}}).toArray((err,dataArray)=>{
                if(err)
                {
                    console.log(err)
                } 
                else
                {
                    if(dataArray.length==0)
                    {
  
        dbo.collection("register2collection").insertOne(req.body,(err,dataArray)=>
        {
            if(err)
            {
                console.log('error in sending')
                console.log(err)
            }
            else
            {
                res.json({message:"documents inserted"})
            }
        })
                    }
                    else
                    {
                        res.json({message:"already existed"})
                    }
                }
                
            
              })


  }
})



          }
      })






///request from tenant to owner after seeing houses search new houses

tenantroutes.post('/responcefromtenant',(req,res)=>
{
  dbo=getDb()
  console.log(req.body);
  if(req.body=={})
  {
      res.json({message:"no data found"})
  }
  else
  {
      dbo.collection('toletcollection').insertOne(req.body,(err,dataArray)=>
      {
          if(err)
          {
              console.log('error in sending')
              console.log(err)
          }
          else
          {
              res.json({message:"Ur responce is sent"})
          }
      })
  }
})
 




//view2 details from database edit2


tenantroutes.get('/view2',(req,res)=>
{
  dbo=getDb()
    dbo.collection('edit2collection').find().toArray((err,dataArray)=>
      {
          if(err)
          {
              console.log('error in sending')
              console.log(err)
          }
          else if(dataArray.length==0)
          {
            res.json({"message":"no document found"})
          }
          else
          {
              res.json({"message":dataArray})
          }
      })
  
})






//search new houses data from data base

tenantroutes.get("/searchnewhouses",(req,res)=>
{
    console.log(req.params)
  dbo=getDb()
    dbo.collection("addnewhousecollection").find().toArray((err,dataArray)=>
      {
          if(err)
          {
              console.log('error in sending')
              console.log(err)
          }
        //   else if(dataArray.length==0)
        //   {
        //     res.json({"message":"no document found"})
        //   }
          else
          {
              res.json({"message":dataArray})
          }
      })
  
})



///delete payment history of tenant
tenantroutes.delete('/deletehisory/:email',(req,res,next)=>
{
    req.body=this.tenantprofile;
    console.log(req.param)
    dbo=getDb()
    dbo.collection('tenantpaymentscollection').deleteOne({email:{$eq:req.body}},(err,success)=>
    {
        if(err)
        {
            console.log(err)
        }
        else
        {
            dbo.collection("tenantpaymentscollection").find({email:{$eq:req.body}}).toArray((err,dataArray)=>
            {
                if(err)
                {
                    console.log(err)
                }
                else
                {
                    res.json({message:"records deleted",data:dataArray})
                }
            })
        }
    })
    
})



//forgot password



const accountSid = 'ACcb35fd5591a6b6a1f76e3f98127f236b';
const authToken = '8f79c47b573189e8c2c948f8742136e3';
const client = require('twilio')(accountSid, authToken);



tenantroutes.post('/forgotpassword',(req,res,)=>{
    //console.log("owner"+req.body)
    dbo=getDb()
    dbo.collection("register2collection").find({email:req.body.email}).toArray((err,userArray)=>{
        if(err){
          console.log(err)
          
        }
       
        else{
            if(userArray.length===0){
                res.json({message:"user not found"})
            }
        
            else{
                   console.log("user"+userArray)
                jwt.sign({email:userArray[0].email},secretkey,{expiresIn:"7d"},(err,token)=>{
                    if(err){
                   console.log(err)
                    }
                    else{
                        var OTP=Math.floor(Math.random()*99999)+11111;
                        console.log("new"+OTP)
                        
                        client.messages.create({
                            body: 'Hello from Node',
                            from: '+12054303954', // From a valid Twilio number
                            to: '+919912399462',  // Text this number
  
                        })
                        .then((message) => {
                            dbo.collection('otp2collection').insertOne({
                                OTP:OTP,
                                email:userArray[0].email,
                                OTPGeneratedTime:new Date().getTime()+15000
                        },(err,success)=>{
                            if(err){
                                console.log(err)
                            }
                            else{                                        
                                res.json({"message":"user found",
                                    "token":token,
                                    "OTP":OTP,
                                    "email":userArray[0].email
                                })
                            }
                        })
                        });

                    }
                    
                })
            }
        }
    })
})




//verify OTP
tenantroutes.post('/verifyotp',(req,res,next)=>{
    console.log(req.body)
    dbo=getDb()
    console.log(new Date().getTime())
    var currentTime=new Date().getTime()
    dbo.collection('otp2collection').find({"OTP":req.body.OTP}).toArray((err,OTPArray)=>{
        if(err){
            next(err)
        }
        else if(OTPArray.length===0){
            res.json({"message":"invalidOTP"})
        }
        else if(OTPArray[0].OTPGeneratedTime < req.body.currentTime){
            res.json({"message":"invalidOTP"})
        }
        else{
            
            dbo.collection('otp2collection').deleteOne({OTP:req.body.OTP},(err,success)=>{
                if(err){
                    next(err);
                }
                else{
                    console.log(OTPArray)
                    res.json({"message":"verifiedOTP"})
                }
            })
        }
    })
})

//changing password
tenantroutes.put('/resetpassword',(req,res,next)=>{
    console.log(req.body)
    dbo=getDb()
    bcrypt.hash(req.body.password,6,(err,hash)=>{
        if (err) {
            console.log(err)
        } else {
           req.body.password=hash;
            dbo.collection("register2collection").updateOne({email:req.body.email},{$set:{
                password:hash
            }},(err,success)=>{
                if(err){
                    console.log(err)
                }
                else{
                    res.json({"message":"password changed"})
                }
            }) 
        }
    })
    
})






//importing owner routes

module.exports=tenantroutes;

