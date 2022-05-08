//Using express object
const express = require('express')
//Express app
const app = express()
//Port
const port = 3000

//Start this app
app.listen(port, () =>{
    console.log(`Example app listening on port ${port}`)
})