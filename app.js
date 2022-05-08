//Using express object
const express = require('express')
//Express app
const app = express()
//Port
const port = 3000

//HTTP 200
app.get('/v1/explorers', (req, res) =>{
    console.log(`Api Explorers GET ALL request ${new Date()}`)
    const explorer1 = {id: 1, name: 'Explorer1'}
    const explorer2 = {id: 2, name: 'Explorer2'}
    const explorer3 = {id: 3, name: 'Explorer3'}
    const explorer4 = {id: 4, name: 'Explorer4'}
    const explorers = [explorer1, explorer2, explorer3, explorer4]
    res.status(200).json(explorers)
})

//Start this app
app.listen(port, () =>{
    console.log(`Example app listening on port ${port}`)
})