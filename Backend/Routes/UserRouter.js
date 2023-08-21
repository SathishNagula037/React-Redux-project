
import express from 'express'
import jwt from 'jsonwebtoken'

import { generateToken} from '../Utilis.js'
import bcrypt from 'bcrypt'
import User from '../models/UserModal.js';

const userRouter  = express()

userRouter.use(express.json())


userRouter.post('/register', (async (req, res) => {
    try{
        console.log("hello")
        const { name, email, Access, password, confirmPassword }  = req.body
       
        const newUser = new User({
            name,
            email,
            password: bcrypt.hashSync(password, 8),
            confirmPassword: bcrypt.hashSync(confirmPassword, 8),
            Access
          })
          const saveUser = await newUser.save()
          const generate = generateToken(saveUser._id)
       

          res.status(201).send({ message: "User saved successfully...", saveUser})

    } catch(error){
       console.log(error)
    }
}))

userRouter.post(
    '/login',
    (async (req, res) => {
      const user = await User.findOne({ email: req.body.email });
      if (user) {
        if (bcrypt.compareSync(req.body.password, user.password)) {
          res.send({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user),
          });
          return;
        }
      }
      res.status(401).send({ message: 'Invalid email or password' });
    })
  );

export default userRouter
