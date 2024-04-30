import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'

// Auth user/ set token
// route POST /api/users/auth

const authUser = asyncHandler (async(req,res) =>{

    res.status(200).json({message: "Auth User"})
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

    res.status(200).json({message: "Logout User"})
})


// get user profile
// route GET /api/users/profile
const getUserProfile = asyncHandler (async(req,res) =>{

    res.status(200).json({message: "User Profile"})
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