import express from "express";

const router = express.Router();

router.get("/", (req, res)=>{
    res.send("Desde API/usuarios")
});

router.post("/", (req, res)=>{
    res.send("Desde API/usuarios POST")
});

export default router;