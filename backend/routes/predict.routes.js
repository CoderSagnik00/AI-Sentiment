import express, { response } from 'express'


const router = express.Router()


router.post("/", (req, res) => {
    const { comments } = req.body;
    const response = 4;
    return res.status(200).send({ success: true, response: response })
})

export default router;