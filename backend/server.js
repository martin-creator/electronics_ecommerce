import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors'
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js';

dotenv.config();

const port = process.env.PORT || 8000

connectDB(); // connect to MongoDB

const app = express();


app.use(cors());

app.get('/', (req, res) => {
    res.send('Server is ready');
});

app.use('/api/products', productRoutes);




app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`);
}
);