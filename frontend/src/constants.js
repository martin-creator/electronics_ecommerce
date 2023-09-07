import dotenv from 'dotenv'

export const BASE_URL = process.env.NODE_ENV === 'production' ? 'https://mern-ecommerce-website.herokuapp.com' : ' http://localhost:5173'
export const PRODUCTS_URL = `/api/products`
export const USERS_URL = `/api/users`
export const ORDERS_URL = `/api/orders`
export const PAYPAL_URL = `/api/config/paypal`
