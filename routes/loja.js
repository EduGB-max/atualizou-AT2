
module.exports = (app) => {
    //abrir o arquivo login,ejs
    app.get('/loja', (req, res) => {
        res.render('loja.ejs')
    })

}