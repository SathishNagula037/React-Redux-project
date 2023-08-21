import mongoose from "mongoose";



const userSchema = new mongoose.Schema(

    {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        confirmPassword: {  type: String, required: true },
        Access: {
            type: String,
            enum: ['superAdmin', 'Admin', 'User'],
            default: 'admin',
            required: true,
          },
      

    },
    {
        timestamps: true,
    }

)

const User = mongoose.model('User', userSchema)
export default User;