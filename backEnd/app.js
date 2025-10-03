const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db.config');
const dotenv = require('dotenv');
dotenv.config(); 

const app = express();

const PORT =process.env.PORT;


// enable cors 
app.use(cors());
// enable json parser
app.use(express.json());

connectDB()
// route the customer api 
const customerRoutes = require('./routes/Customer.route');
//use the route
app.use('/api/customers',customerRoutes);

app.get('/',(req,res)=>{
    res.send('Welcome to Customers API !')
})

app.listen(PORT,(error)=>{
    if(!error){
        console.log("Server is successfully listening at port:",PORT);
    }else{
        console.error('An error occurred:',error);
        
    }

})