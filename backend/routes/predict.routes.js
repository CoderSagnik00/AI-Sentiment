import express, { response } from 'express'


const router = express.Router()


router.get("/", (req, res) => {
    const { comment } = req.body;
    return res.status(200).json({ success: true, response: comment });
})

router.post("/", (req, res) => {
    const { fixResp } = req.body;
    return res.status(200).send({ success: true, response: fixResp })
})

export default router;