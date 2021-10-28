const novoTitulo = require("../models/main");

module.exports = (app) =>{


    app.post('/post', async(req, res)=>{
        try{
            const mod = req.body.mod;
            const cat = req.body.categoria;
            const resposta = novoTitulo(mod, cat);
            console.log(resposta)
            res.status(201).json(resposta);
            
        }catch(e){
            return res.status(400).send({error:e});
        }
    })

    app.get('/', (req, res)=>{
        res.send({msg: "Esses não são os droides que está procurando. Já pode ir andando."})
    })
}

