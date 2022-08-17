const mongoose = require('mongoose')
 
const modelo = mongoose.Schema({
    comida:String,
    data:String,
    usuario:String
})

const item = mongoose.model('item',modelo)

module.exports = item