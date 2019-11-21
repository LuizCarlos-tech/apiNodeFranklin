/* Rota de Teste */
const express = require("express");
const router = express.Router();

const RoutesController = require("../app/controller/UserController");
router.post("/ws-operators/v1/pay/", RoutesController.index);
router.post("/ws-operators/v1/pay/create", RoutesController.create);


module.exports = router;
