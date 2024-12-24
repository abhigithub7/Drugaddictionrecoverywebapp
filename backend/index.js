const express = require('express')
const app = express();

const dotenv = require('dotenv')
dotenv.config();
const mongoose   = require('mongoose')
const userRoute = require('./Routes/user-route')
const cors = require('cors')

const PORT = process.env.PORT || 5000
const URI = process.env.MongoDBURI

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})
// connect mongodb
try{
    mongoose.connect(URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log("mongodb connected")

}


catch(error){
    console.log("error : ",error);

}



// define routes
app.use('/users',userRoute);



  app.listen(PORT, () => {
    console.log(`my server listening on port ${PORT}`)
  })


  