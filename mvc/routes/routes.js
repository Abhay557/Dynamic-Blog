const express = require('express')
const router = express.Router()
const controller = require("../controller/controller.js")

router.get("/", controller.getAllPosts)
router.get("/:id", controller.getOnePost)
router.post("/", controller.createPost)
router.patch("/:id", controller.updatePost)//oh look it's a patch route
router.delete("/:id", controller.deletePost)

module.exports = router
