import express from 'express'

const router = express.Router();


router.post("/", (req, res) => {
    const { comment } = req.body;
    
    return res.status(200).json({ success: true, response: "Positive" });
})
export default router;
