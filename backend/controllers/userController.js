import asyncHandler from 'express-async-handler'


// Auth user/ set token
// route POST /api/users/auth

const authUser = asyncHandler (async(req,res) =>{

    res.status(200).json({message: "Auth User"})
})


// Register new user
// route POST /api/users
const registerUser = asyncHandler (async(req,res) =>{

    res.status(200).json({message: "Register User"})
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