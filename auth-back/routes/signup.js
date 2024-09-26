import { Router } from "express";
import jsonResponse from "../lib/jsonResponse.js";

const router = Router();

router.post("/", (req, res) => {
  const { username, name, password } = req.body;

  // Corregir la condición: Si falta algún campo, devolver error
  if (!username || !name || !password) {
    return res.status(400).json(
      jsonResponse(400, {
        error: "All fields are required",
      })
    );
  }

  // Si todos los campos están presentes, devolver éxito
  return res.status(200).json(jsonResponse(200, { message: "User created successfully" }));
});

export default router;
