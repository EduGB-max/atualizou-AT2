
module.exports = (app) => {

    app.get('/sobre', (req,res) => {
    
    res.render("sobre.ejs")
    
    })
}