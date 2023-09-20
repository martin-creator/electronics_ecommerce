import jwt from 'jsonwebtoken';

const generateToken = (res, userId) => {
    const token = jwt.sign({id: userId}, process.env.JWT_SECRET, {
        expiresIn: '30d'});

    // set JWT as cookie
    res.cookie('token', token, {
        httpOnly: true,
        maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
        secure: process.env.NODE_ENV !== 'development',
        sameSite: 'strict'
    });
}

export default generateToken;