
//importing mongo
const mongoclient=require("mongodb").MongoClient

const url="mongodb://saikumar:saikumarpassword@cluster0-shard-00-00-s0llc.mongodb.net:27017,cluster0-shard-00-01-s0llc.mongodb.net:27017,cluster0-shard-00-02-s0llc.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority";
 var dbo;

 function initDb()
 {
mongoclient.connect(url,{ useNewUrlParser: true },(err,client)=>
{
    if(err)
    {
        console.log('db not connected') 
        console.log(err)   
    }
    else
    {
        dbo=client.db('saikumar')
        console.log('db connected')
        
    }
})
 }

 function getDb()
 {
     console.log(dbo,'database had installed')
     return dbo;
 }

 //exporting db connection

 module.exports={initDb,getDb}




