import express from "express";
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import productRouter from './routers/productRouter.js';
import seedRouter from './routers/seedRouter.js';
import authRouter from "./routers/authRouter.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//connect to mongodb
mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/amazona', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

app.use('/seeds', seedRouter);
app.use('/api/auth', authRouter);

app.use('/api/products', productRouter);


app.get('/', (req, res) => {
    res.send('Server is ready');
});

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});