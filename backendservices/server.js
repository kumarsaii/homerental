const exp=require('express')
const app=exp()


//integration

const path=require('path');
console.log(__dirname);


//connecting anulgar to backend
app.use(exp.static (path.join(__dirname,'../dist/success')));



//importing owner routes
const ownerroutes=require('./routes/ownerroutes')
const tenantroutes=require('./routes/tenantroutes')
const adminroutes=require('./routes/adminroutes')
//informing routes to server
app.use("/owner",ownerroutes)
app.use('/tenant',tenantroutes)
app.use('/admin',adminroutes)

//port number

app.listen(process.env.PORT ||8080,()=>
{
    console.log(`server is running on port 8080`)
})
