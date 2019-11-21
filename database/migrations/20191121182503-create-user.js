module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      numero_cartao: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      nome_cliente: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      bandeira: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      cod_seguranca: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      valor_em_centavos: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      parcelas: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      cod_loja: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('Users');
  }
};