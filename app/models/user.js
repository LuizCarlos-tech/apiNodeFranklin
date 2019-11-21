module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
      numero_cartao: DataTypes.STRING,
      nome_cliente: DataTypes.STRING,
      bandeira: DataTypes.STRING,
      cod_seguranca: DataTypes.INTEGER,
      valor_em_centavos: DataTypes.INTEGER,
      parcelas: DataTypes.INTEGER,
      cod_loja: DataTypes.STRING
    });

    return User;
  }