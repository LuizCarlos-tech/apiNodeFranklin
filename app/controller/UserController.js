const { User } = require("../models");

module.exports = {

    async index(req, res) {
      const pay = {...req.body};

        const user = await User.findOne({where:{id:1}})
        .then(user => {
          console.log(user);
          if(user.numero_cartao === pay.numero_cartao && user.nome_cliente === pay.nome_cliente &&
             user.bandeira === pay.bandeira && user.cod_seguranca === pay.cod_seguranca && (pay.valor_em_centavos > 0 && pay.valor_em_centavos <= user.valor_em_centavos)){
            return res.status(200).json(user);
         }else{
          return res.status(401).json({ "error": "sai daqui maluco tu não é autorizado corno" });
         }
        }).catch(err => {
          console.log(err);
          return res.send({
            error: "Erro",
            description: err
          });
        })
         
       
           

        
   },


    async create(req, res) {
      const { numero_cartao, nome_cliente, bandeira, cod_seguranca, valor_em_centavos, parcelas, cod_loja } = req.body;

      const newUser = { numero_cartao, nome_cliente, bandeira, cod_seguranca, valor_em_centavos, parcelas, cod_loja };
        
      try {
        const user = await User.create(newUser);

        return res.json(user);
      } catch (err) {

        return res.json({
          error: "Erro ao Cadastrar",
          description: "Erro no Servidor.",
          err
        });
      }
    }
  };