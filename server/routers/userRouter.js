import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import User from '../models/User.js';
import userSeeder from '../seeds/UserSeeder.js';

const userRouter = express.Router();

userRouter.get(
  '/seed',
  expressAsyncHandler(async (req, res) => {
    // await User.remove({});
    const createdUsers = await User.insertMany(userSeeder);
    res.send({ createdUsers });
  })
);

export default userRouter;