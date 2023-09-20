import jwt from 'jsonwebtoken';
import asyncHandler from './asyncHandler';
import User from '../Models/userModel.js'

// Protect routes
const protect = asyncHandler(async (req, res, next) => {
    let token;

    // Check if token is in headers
    token = req.cookies.token;

    // Check if token exists
    if (token){
        try {
            // Verify token
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            // Get user from database
            req.user = await User.findById(decoded.id).select('-password');

            next();
        } catch (error) {
            console.error(error);
            res.status(401);
            throw new Error('Not authorized, token failed');
        }
    }else{
        res.status(401);
        throw new Error('Not authorized, no token');
    }
});

// Admin middleware
const admin = (req, res, next) => {
    if(req.user && req.user.isAdmin){
        next();
    }else{
        res.status(401);
        throw new Error('Not authorized as an admin');
    }
}



export { protect, admin };

