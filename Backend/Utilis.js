import jwt from 'jsonwebtoken';



export const generateToken = (user) => {
    return jwt.sign(
        {
            _id: user._id,
            name: user.name,
            email: user.email,
            Access: user.Access
          
          
        },
        process.env.JWT_SECRET || 'somethingSecret',
        {
            expiresIn: '30d'
        }
    )

}

export const isAuth = (req, res, next) => {
    const authorization = req.headers.authorization;
    if(authorization){
        const token = authorization.slice(7, authorization.length); //Bearer xxxxx
        jwt.verify(token, process.env.JWT_SECRET || 'somethingSecret', (err, decode) => {
            if(err){
                  res.status(401).send({ message: "Invalid Token..."})
            }else{
                req.user = decode
                console.log(req.user)
            }
        })

    }
}
// isAdmin.js
export const isAdmin = (req, res, next) => {
    
    console.log("Hii...")

    if (req.user && req.user.Access === "Admin") {
        next();
    } else {
        res.status(401).send({ message: 'Unauthorized: Access restricted to admins' });
    }
};
