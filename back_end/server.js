require('dotenv').config({path : './configs/.env'})

const  express = require('express')
const app = express()

app.listen(process.env.PORT, ()=> console.log(`app is listening on port:${process.env.PORT}`))


