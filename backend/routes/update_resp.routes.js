import express from 'express'

const router = express.Router();


router.post("/", (req, res) => {
    const { fixResp } = req.body;
    
    return res.status(200).json({ success: true});
})
export default router;
