import express from 'express'
import 'dotenv/config'

import predict_r from './routes/predict.routes.js'


const app = express()

app.use(express.json())
app.use("/api/predict", predict_r)

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`Server started at PORT ${PORT}`);
})