import express from "express";
const router = express.Router();

import { registrar, autenticar, confirmar, olvidePassword } from "../controllers/usuarioController.js";

// Autenticacion, Registro y confirmación de usuarios

router.post("/", registrar);

router.post("/login", autenticar);

router.get("/confirmar/:token", confirmar)

router.post("/olvide-password", olvidePassword);

export default router;