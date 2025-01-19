import express from 'express'
import 'dotenv/config'
import cors from 'cors'

import { connectDB, client } from './config/db.js'

const app = express()


app.use(express.json())
app.use(cors())

let currentComment = "";

app.post("/api/predict", (req, res) => {
    const { comments } = req.body;
    currentComment = comments;
    // response will come from the ML model
    const response = 4;
    return res.status(200).send({ success: true, response: response, comments: comments });
})

app.post("/api/update", (req, res) => {
    const { fixResp } = req.body;

    const data = { comments: currentComment, sentiments: fixResp };
    createDataset(data);
    return res.status(200).json({ success: true });
})
const PORT = process.env.PORT



async function createDataset(data) {
    const db = client.db("AI-Sentiment")
    const collection = db.collection("fixDatasets");
    const result = await collection.insertOne(data);
    console.log('Document Inserted:', result.insertedId);
}





app.listen(PORT, () => {
    connectDB();
    console.log(`Server started at PORT ${PORT}`);
})