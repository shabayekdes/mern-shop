import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import Product from '../models/Product.js';
import User from '../models/User.js';
import productSeeder from '../seeds/ProductSeeder.js';
import userSeeder from '../seeds/UserSeeder.js';


const seedRouter = express.Router();

seedRouter.get(
  '/users',
  expressAsyncHandler(async (req, res) => {
    // await User.remove({});
    const createdUsers = await User.insertMany(userSeeder);
    res.send({ createdUsers });
  })
);

seedRouter.get(
    '/products',
    expressAsyncHandler(async (req, res) => {
      // await Product.remove({});
      const createdProducts = await Product.insertMany(productSeeder);
      res.send({ createdProducts });
    })
  );

export default seedRouter;