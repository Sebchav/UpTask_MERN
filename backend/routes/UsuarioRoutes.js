import express from "express";
const router = express.Router();

import { registrar, autenticar, confirmar, olvidePassword, comprobarToken, nuevoPassword} from "../controllers/usuarioController.js";

// Autenticacion, Registro y confirmación de usuarios

router.post("/", registrar);

router.post("/login", autenticar);

router.get("/confirmar/:token", confirmar)

router.post("/olvide-password", olvidePassword);

router.get("/olvide-password/:token", comprobarToken);

router.post("/olvide-password/:token", nuevoPassword);

export default router;