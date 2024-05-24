const express = require("express")
const router = express.Router()
const controller=require("../controller/controller")

router.post("/users",controller.Postfind)
router.get("/users",controller.getAll)
router.get("/users/:id",controller.getbyID)
router.delete("/users/:id",controller.DeletebyID)
router.patch("/users/:id",controller.PatchbyID)
module.exports = router