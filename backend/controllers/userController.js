import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'
import generateToken from '../utils/generateToken.js'

// Auth user/ set token
// route POST /api/users/auth

const authUser = asyncHandler (async(req,res) =>{

    const { email, password } = req.body;
    const user = await User.findOne({ email })
    if (user && (await user.matchPassword(password))) {
        generateToken(res, user._id)
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email:user.email
        })
    }else{
        res.status(401);
        throw new Error('Invalid Email or Password')
    }

})


// Register new user
// route POST /api/users
const registerUser = asyncHandler (async(req,res) =>{
    //get the data from the body
    const { name, email, password } = req.body
    // check if it already exists
    const userExists = await User.findOne({
        email
    })

    if (userExists) {
        res.status(400);
        throw new Error('User Already Exists')
    }

    // if not exists create new one

    const user = await User.create({
        name,
        email,
        password
    })

    if (user) {
        generateToken(res, user._id)
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email:user.email
        })
    }else{
        res.status(400);
        throw new Error('Invalid User Data')
    }
})


// logout user
// route POST /api/users/logout
const logoutUser = asyncHandler (async(req,res) =>{

    //destroy the cookie
    res.cookie('jwt','',{
        httpOnly:true,
        expires: new Date(0)
    })
    res.status(200).json({message: "User logged out"})
})


// get user profile
// route GET /api/users/profile
const getUserProfile = asyncHandler (async(req,res) =>{
    const user = {
        _id: req.user._id,
        name:req.user.name,
        email: req.user.email
    }
    res.status(200).json({user})
})



// update user profile
// route PUT /api/users/profile
const updateUserProfile = asyncHandler (async(req,res) =>{

    res.status(200).json({message: "Update User Profile"})
})


export {
    authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile
}