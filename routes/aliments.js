module.exports = (app) => {

    app.post('/loja', async (req, res) => {
        let dados = req.body
        //return console.log(dados)

        // conectar com o database
        const database = require("../config/database")()

        //importar o model atividades
        const aliments = require("../models/item")

        //gravar as infomações do formulario no database

        let gravar = await new aliments({
            data: dados.data,
            usuario: req.query.id,
            comida:  dados.comida

        }).save()

        //recarregar a pagina atividades
        res.redirect('/aliments?id=' + req.query.id)

})

app.get('/aliments', async(req, res) => {
    var user = req.query.id
    var ordem = req.query.ordem
    if(!user){
        res.redirect('/login')
    }
    var usuarios = require('../models/usuarios')
    var alimentos = require('../models/item')

    var dadosUser = await usuarios.findOne({_id:user})

    if(!ordem || ordem == 0){

        var produtosGeral = await alimentos.find({usuario:dadosUser._id, status:"0"}).sort({validade:1})

        var produtosDescarte = await alimentos.find({usuario:dadosUser._id, status:"1"}).sort({validade:1})

    }else{
        var produtosGeral = await alimentos.find({usuario:dadosUser._id, status:"0"}).sort({produto:1})

        var produtosDescarte = await alimentos.find({usuario:dadosUser._id, status:"1"}).sort({produto:1})

    }


    res.render('aliments.ejs', ({nome:dadosUser.nome, id:dadosUser._id,produtosDescarte,produtosGeral}))
    //res.render('alimentos.ejs', ({nome:dadosUser.nome, id:dadosUser._id, lista:dadosalimentos}))
})
  
}