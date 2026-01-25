import { citaController } from "@/controllers/citasPostController/citaController"

export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      if (req.query.check === "true") {
        return await citaController.checkAvailability(req, res)
      }
      return await citaController.listar(req, res);
    case "POST":
      return await citaController.agendar(req, res);
    case "DELETE":
      return await citaController.eliminar(req, res);
    default:
      return res.status(405).json({ message: "METHOD_NOT_ALLOWED" })
  }
}