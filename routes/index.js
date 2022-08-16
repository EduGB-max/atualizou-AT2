
module.exports = (app) => {

app.get('/', (req,res) => {

res.render("index.ejs")

})


app.post('/', (req,res) => {

var conexao = require ('../config/database')
conexao()

})


}