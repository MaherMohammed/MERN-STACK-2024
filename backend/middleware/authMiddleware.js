import jwt from 'jsonwebtoken'
import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'


// protect the cookie to protect the user profile route because we can access it even if not logged in
const protect = asyncHandler(async (req,res,next) => {
    let token 
    token = req.cookies.jwt

    if(token){
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET)
            req.user = await User.findById(decoded.userId).select('-password')
            next()
        } catch (error) {
            res.status(401)
            throw new Error('Not Authorized, Invalid token')
        }
    }else{
        res.status(401)
        throw new Error('Not Authorized, no token')
    }
})


export {
    protect
}