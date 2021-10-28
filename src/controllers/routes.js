const novoTitulo = require("../models/main");

module.exports = (app) =>{

    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", '*');
        res.header("Access-Control-Allow-Credentials", true);
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
        res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
        next();
    });
    

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

