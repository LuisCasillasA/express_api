//Using express object
const express = require('express')
//Express app
const app = express()
//Port
const port = 3000

//HTTP 200
app.get('/v1/explorers/:id', (req, res) =>{
    console.log(`Api Explorers GET ALL request ${new Date()}`)
    console.log(`Getting explorer with ID ${req.params.id}`)
    const explorer = {id: 1, name: 'Explorer1'}
    res.status(200).json(explorer)
})

//Start this app
app.listen(port, () =>{
    console.log(`Example app listening on port ${port}`)
})