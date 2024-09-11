//Importar Modulos
const express = require('express')
const mongoose = require('mongoose')

//Server Config
const app = express();
const port = 3000;

//set patch
const path = require('path')
app.set('views', path.join(__dirname, '/views'))

//View Engine
app.set('view engine', 'ejs')
app.set(express.static('public'))


//Set Home
app.get('/',(request, response) => {
    response.render('index')
})

// set Chavales 
const juan = {id: 1, nombre: "Juan", edad: 12, tiempo:5 , cobra: 10000 }
const pedro = {id: 2, nombre: "Pedro", edad: 15, tiempo:7 , cobra: 5000 }
const pepe = {id: 3, nombre: "Pepe", edad: 22, tiempo:22 , cobra: 9000 }
const cele = {id: 4, nombre: "cele", edad: 29, tiempo:4 , cobra: 15000 }
const c = [juan, pedro, pepe, cele]

app.get('/empleados',(request, response) => {
    response.render('chavales', {c})
})

app.get('/empleados/:id', (req, res) =>{
    const id = req.params.id
    const Chavalon = c[id]
    res.render('chaval', {Chavalon})
})

// Set Perritos Page
const tyson = {id: 1,name: "Tyson", age: 3, breed: "Pitbull"}
const aquira = {id: 2,name: "Aquira", age: 3, breed: "Dogo"}
const duque = {id: 3,name: "Duque", age: 3, breed: "Labrador"}
const a = [tyson, aquira, duque]

app.get('/perritos',(request, response) => {
    response.render('perritos', {a})
})

app.get('/perritos/:id', (req, res) =>{
    const id = req.params.id
    const perrazo = a[id]
    res.render('perrito', {perrazo})
})

app.listen(port,()=>{
    console.log(`Server escuchand en puerto: ${port}`)
})

