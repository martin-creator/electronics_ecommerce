import asyncHandler from "../middleware/asyncHandler.js";
import User from "../Models/userModel.js";
import jwt from "jsonwebtoken";


// @desc    Auth user & get token
// @route   GET /api/users/login
// @access  Public

const authUser = asyncHandler(async(req, res) => {
    const {email, password} = req.body;

    // check if user exists
    const user = await User.findOne({email});

    if (user && (await user.matchPassword(password))) {
        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {
            expiresIn: '30d'});

        // set JWT as cookie
        res.cookie('token', token, {
            httpOnly: true,
            maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
            secure: process.env.NODE_ENV !== 'development',
            sameSite: 'strict'
        });


        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin
        });
    } else {
        res.status(401);
        throw new Error('Invalid email or password');
    }
});

// @desc    Register a new user
// @route   POST /api/users
// @access  Public

const registerUser = asyncHandler(async(req, res) => {
    const {name, email, password} = req.body;

    // check if user exists
    const userExits = await User.findOne({email});

    if (userExits) {
        res.status(400);
        throw new Error('User already exists');
    }

    // create user
    const user = await User.create({
        name,
        email,
        password
    });

    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin
        });
    } else {
        res.status(400);
        throw new Error('Invalid user data');
    }
});

// @desc    Logout user & clear cookie
// @route   GET /api/users/logout
// @access  Private

const logoutUser = asyncHandler(async(req, res) => {
    res.cookie('token', 'none', {
        expires: new Date(Date.now(0)),
        httpOnly: true
    });

    res.status(200).json({
        message: 'User logged out successfully',
        success: true,
        data: {}
    });
}
);

// @desc    Get user profile
// @route   GET /api/users/profile
// @access  Public

const getUserProfile = asyncHandler(async(req, res) => {
    res.send('Profile Route');
}
);

// @desc    Update user profile
// @route   PUT /api/users/profile
// @access  Private

const updateUserProfile = asyncHandler(async(req, res) => {
    res.send('Update Profile Route');
}
);

// @desc    Get all users
// @route   GET /api/users
// @access  Private/Admin

const getUsers = asyncHandler(async(req, res) => {
    res.send('Get Users Route');
}
);

// @desc    Get user by ID
// @route   GET /api/users/:id
// @access  Private/Admin

const getUserById = asyncHandler(async(req, res) => {
    res.send('Get User by ID Route');
}
);

// @desc    Delete user
// @route   DELETE /api/users/:id
// @access  Private/Admin

const deleteUser = asyncHandler(async(req, res) => {
    res.send('Delete User Route');
}
);

// @desc    Update user
// @route   PUT /api/users/:id
// @access  Private/Admin

const updateUser = asyncHandler(async(req, res) => {
    res.send('Update User Route');
}
);

export {authUser, registerUser, logoutUser, getUserProfile, updateUserProfile, getUsers, getUserById, deleteUser, updateUser};
