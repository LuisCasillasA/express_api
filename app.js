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

app.post('/v1/explorers', (req, res) => {
    console.log(`Api Explorers POST request ${new Date()}`)
    const requestBody = req.body //Client params
    res.status(201).json({message: 'Created'})
})

app.put('/v1/explorers/:id', (req, res) => {
    console.log(`Api Explorers PUT request ${new Date()}`)
    console.log(`Update explorers with id ${req.params.id}`)
    const requestBody = req.body //Client params
    res.status(200).json({message: 'Updated!'})
})

app.delete('/v1/explorers/:id', (req, res) => {
    console.log(`Api Explorers DELETE request ${new Date()}`)
    console.log(`Delete explorer with id ${req.params.id}`)
    const requestBody = req.body //Params client 
    res.status(200).json({message: 'Deleted'})
})

//Start this app
app.listen(port, () =>{
    console.log(`Example app listening on port ${port}`)
})