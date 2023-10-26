var express = require("express"); // importer express
const cors = require("cors") ;
const connectdatabase = require('./configuration/config');
const userRouter = require('./router/userrouter');
const routerPayment = require("./router/routerstripe");

var app = express();  
const port=5000  
app.use(express.json())
app.use('/user',userRouter)
app.use('/paiment',routerPayment)
app.use(cors (
    
))
connectdatabase()   
              
app.listen(port,console.log(`server is running at ${port}`)); //connecter au serveur


