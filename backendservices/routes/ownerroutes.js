
//express instalation
const exp=require('express')
var ownerroutes=exp();
var bodyparser=require('body-parser')



//authorization
const authorization=require('../middleware/authorization')


ownerroutes.use(bodyparser.json());


///importing database connection
const getDb=require('../dbconfig.js').getDb
const initDb=require('../dbconfig.js').initDb

initDb();

//bcrypt importing

const bcrypt=require('bcrypt')

///json web token

const jwt=require("jsonwebtoken")
const secretkey="secret1"


//owner view houses
ownerroutes.get('/viewhouses1',(req,res)=>
{

    req.body=this.profileonly
    dbo=getDb()
   dbo.collection('addnewhousecollection').find({email:{$eq:req.body}}).toArray((err,housearray)=>
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





//view payment history
ownerroutes.get('/viewhouses2',authorization,(req,res)=>
{
    req.params=this.profileonly
    dbo=getDb()
   dbo.collection("paymentscollection").find({email:{$eq:req.params}}).toArray((err,housearray)=>
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




var profileonly;
var totaldetails;

//owner view proile  details owner
ownerroutes.get('/viewprofile1',authorization,(req,res)=>

{  req.body=this.profileonly

   
    dbo=getDb()
   dbo.collection("saikumarcollection").find({email:{$eq:req.body}}).toArray((err,dataArray)=>
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






///responce from tenant is recived (search new house)


ownerroutes.get('/responcefromowner',authorization,(req,res)=>

{  req.body=this.profileonly
   // ownermail=req.params
    //console.log(req.body)
   
    dbo=getDb()
   dbo.collection("toletcollection").find({owneremail:{$eq:req.body}}).toArray((err,dataArray)=>
   {
       if(err)
       { console.log(err)
           console.log('errr in reading data')
          
       }
       
       else
       {
           res.json({"message":dataArray})
       }
   })
})







//login form 


ownerroutes.post('/loginowner',(req,res)=>
{//console.log(req.body)
    dbo=getDb()
    
   dbo.collection("saikumarcollection").find({email:{$eq:req.body.email}}).toArray((err,dataArray)=>{

    console.log(dataArray.length);
    if(dataArray.length==0)
    {
       res.json({'message':'invalid username'})
    }
    else if  (dataArray[0].password!==req.body.password)

    {  
        
        //comparing bcrypt password to hashed password
        bcrypt.compare(req.body.password,dataArray[0].password,(err,result)=>
        {
            if(result==true)
            {
                //creating a send token
                const signedToken=jwt.sign({name:dataArray[0].name},secretkey,{expiresIn:"300000"})
                    console.log(signedToken)
                    //send signed token as responce after login 
                    
                    

                res.json({message:"success",token:signedToken,data:dataArray})
                this.profileonly=dataArray[0].email
           
                console.log(err)
            }
            else
            {
             res.json({message:"ivalid password"})
            }
        })
    }
   
   })
        


})











//post handler register1 form
ownerroutes.post('/savedetails',(req,res)=>
{
    dbo=getDb()

    //console.log(req.body);
     if(req.body=={})
    {
        res.json({message:"no data found"})
    }

    
    else 
    {   ///hashing the code
        bcrypt.hash(req.body.password,6,(err,hash)=>{
            if(err)
            {
                console.log(err)
            }
            else 
            {
                req.body.password=hash;
    dbo.collection("saikumarcollection").find({email:{$eq:req.body.email}}).toArray((err,dataArray)=>{

            if(dataArray.length==0)
            {
                dbo.collection('saikumarcollection').insertOne(req.body,(err,dataArray)=>
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
                res.json({"message":' email allready exists'})
            }

                })
     


        
    }
    
})
            }
       
        })

        





///modified data owner edit details profile
ownerroutes.put('/modifyownerprofile',(req,res)=>
{ 
    //req.params=this.profileonly;
  dbo=getDb()
  //console.log(req.body );
  dbo.collection("saikumarcollection").updateMany({email:{$eq:req.body.email}},{$set:{name:req.body.name,email:req.body.email,mobile:req.body.mobile,city:req.body.city,dob:req.body.dob}},
   // {$set:{name:req.body.email}},
    //{$set:{name:req.body.mobile}},
   // {$set:{name:req.body.city}},
   // {$set:{name:req.body.dbo}}
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
  



//post handelr editdetails  edit button in owner
ownerroutes.post('/savedetails2',(req,res)=>
{
    dbo=getDb()
    //console.log('req.body');
    if(req.body=={})
    {
        res.json({message:"no data found"})
    }
    else
    {
        dbo.collection('viewcollection').insertOne(req.body,(err,dataArray)=>
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






//post handelr addnew house form owner
ownerroutes.post('/savedetails3',(req,res)=>
{
    
    dbo=getDb()
  //  console.log('req.body');
    if(req.body=={})
    {
        res.json({message:"no data found"})
    }
    else
    {
        dbo.collection('addnewhousecollection').insertOne(req.body,(err,dataArray)=>
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




///responce after messaging from tenant after seeing new houses



ownerroutes.post('/responceofowner',authorization,(req,res)=>
{
  // req.body2=this.profileonly;
    dbo=getDb()
    //console.log(req.body);
    if (req.body=={})
    {
       // res.json({message:"no data found"})
    }
    else
    {
        dbo.collection("msgofownercollection").insertOne(req.body,(err,dataArray)=>
        {
            if(err)
            {
                console.log('error in sending')
                console.log(err)
            }
            else
            {
                res.json({message:"ur responce is sent"})
            }
        })
    }
    
})




//post handelr payments form owner
ownerroutes.post('/savedetails4',(req,res)=>
{
    dbo=getDb()
   // console.log('req.body');
    if(req.body=={})
    {
        res.json({message:"no data found"})
    }
    else
    {
        dbo.collection('paymentscollection').insertOne(req.body,(err,dataArray)=>
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






//update
ownerroutes.put('/update',(err,success)=>
{
    ///console.log('put req handler')
})






///delete ownerviewhouses new houses
ownerroutes.delete('/delete/:email',(req,res,next)=>
{

    req.params=this.profileonly
    //console.log(req.param)
    dbo=getDb()
    dbo.collection('addnewhousecollection').deleteOne({email:{$eq:req.params}},(err,success)=>
    {
        if(err)
        {
            console.log(err)
        }
        else
        {
            dbo.collection("addnewhousecollection").find({email:{$eq:req.params}}).toArray((err,dataArray)=>
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



///delete payment history of owner1
ownerroutes.delete('/deletehistory/:email',(req,res,next)=>
{  req.params=this.profileonly
    //console.log(req.param)
    dbo=getDb()
    dbo.collection('paymentscollection').deleteOne({email:{$eq:req.params}},(err,success)=>
    {
        if(err)
        {
            console.log(err)
        }
        else
        {
            dbo.collection("paymentscollection").find({email:{$eq:req.params}}).toArray((err,dataArray)=>
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




///delete owner view details 
ownerroutes.delete('/delete/:email',(req,res,next)=>
{ req.params=this.profileonly
    //console.log(req.param)
    dbo=getDb()
    dbo.collection("viewcollection").deleteOne({email:{$eq:req.params}},(err,success)=>
    {
        if(err)
        {
            console.log(err)
        }
        else
        {
            dbo.collection("viewcollection").find({email:{$eq:req.params}}).toArray((err,dataArray)=>
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



ownerroutes.post('/forgotpassword',(req,res,)=>{
    console.log("owner"+req.body)
    dbo=getDb()
    dbo.collection("saikumarcollection").find({email:req.body.email}).toArray((err,userArray)=>{
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
                            dbo.collection('otpcollection').insertOne({
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
ownerroutes.post('/verifyotp',(req,res,next)=>{
    console.log(req.body)
    dbo=getDb()
    console.log(new Date().getTime())
    var currentTime=new Date().getTime()
    dbo.collection('otpcollection').find({"OTP":req.body.OTP}).toArray((err,OTPArray)=>{
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
            
            dbo.collection('otpcollection').deleteOne({OTP:req.body.OTP},(err,success)=>{
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
ownerroutes.put('/resetpassword',(req,res)=>{
    console.log(req.body)
    dbo=getDb()
    bcrypt.hash(req.body.password,6,(err,hashedpassword)=>{
        if (err) {
                      console.log(err)
        } else {
            console.log(hashedpassword)
            dbo.collection("saikumarcollection").updateOne({email:req.body.email},{$set:{
                password:hashedpassword
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





//exporting owner routes

module.exports=ownerroutes;

      