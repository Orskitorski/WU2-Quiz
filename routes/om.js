import express from "express"

const router = express.Router()

router.get("/", (req, res) => {
    res.render("om.njk", {
        message: "Om"
    })
})

export default router