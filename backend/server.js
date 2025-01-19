import express from 'express'
import 'dotenv/config'
import cors from 'cors'

import predict_r from './routes/predict.routes.js'
import update_r from './routes/update_resp.routes.js'


const app = express()

app.use(express.json())
app.use(cors())
app.use("/api/predict", predict_r);
app.use("/api/update", update_r);

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`Server started at PORT ${PORT}`);
})