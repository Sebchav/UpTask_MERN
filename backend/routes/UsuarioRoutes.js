import express from "express";
const router = express.Router();

import { registrar } from "../controllers/usuarioController.js";

// Autenticacion, Registro y confirmación de usuarios

router.post("/", registrar)

export default router;