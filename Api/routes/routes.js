const express = require("express");
const router = express.Router();

const apiControllers = require("../controllers/apiControllers");

router.get("/teste", apiControllers.test);
router.get("/", apiControllers.listar);
router.post("/cadastro", apiControllers.criar);
router.put("/cadastro/:id", apiControllers.atualizar);
router.delete("/deletarCadastro/:id", apiControllers.delete);

module.exports = router;
