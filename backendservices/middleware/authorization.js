//importing the token

// const jwt=require("jsonwebtoken")
// const secret='secret';
// var checkauthorization=(req,res,next)=>
// {
//     console.log(req['authorization']);
//     //read authorization in req object
//     var token=req['authorization'];
//     //console.log(authorization)



//     //if token is formed check for validity
//     if(token==undefined)
//     {
//         return res.json({"message":"unauthorized access"})
//     }
//     if(token.startsWith("bearer"))
//     {
//         token=token.slice(7,token-length);
//     }
//     jwt.verify(token,secret,(err,decoded)=>{
//         if(err)
//         {
//             return res.json({message:"invalid"})
//         }
//         //forward to next middle ware or req handler
//        else{ next();}
       
//     })
// }
// module.exports=checkauthorization



const jwt=require("jsonwebtoken");
const secretkey="secret1"
var authorization=(req,res,next)=>{
    console.log(req.headers)
    //read authorization  in req object
    var token=req.headers["authorization"]
    //if token is found check for validity
    if (token==undefined){
        return res.json({message:"unauthorized access"})   
    }
    if(token.startsWith("Bearer "))
    {
        token=token.slice(7,token.length);
        console.log(token)
        jwt.verify(token,secretkey,(err,decoded)=>{
            if(err){
                console.log(err)
                return res.json({message:"invalid"})
            }
            //forward to next middleware
            next()
        })
    }
}
module.exports=authorization