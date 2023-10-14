require('dotenv').config()
const cors  = require('cors')
const express = require('express');
const Authrouter = require('./routes/Authroutes');
const Voterouter = require('./routes/VoteRoutes')
const Nomineesrouter = require('./routes/Nomineeroutes')
const mongoose = require('mongoose')

const app = express()

mongoose.connect(process.env.dburl)
    .then(() => 
    {
        app.listen(process.env.PORT, (err) => 
        {
            if(err)
            {
                throw Error(err)
            }
            // console.log('listening on port 4000');
            // console.log('connected to database')
        })  
    })
    .catch(err => {throw Error(err)})


app.use(express.json())

app.use((req,res,next) => {
    console.log(req.path,req.method)
    next()
})

app.use(cors())

app.use('/api',Authrouter)
app.use('/api',Voterouter)
app.use('/api',Nomineesrouter)

