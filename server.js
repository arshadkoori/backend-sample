import express from 'express';
import dotenv from 'dotenv';
import connectDB from './connection.js';
import userRoutes from './router/router.js';
import { notFound , errorHandler} from './middleware/test-mw.js';

dotenv.config();
const app = express();
connectDB();
app.use(express.json());
app.use('/api/users',userRoutes);
app.use(notFound);
app.use(errorHandler);
const PORT = process.env.PORT || 5000;
app.listen(PORT,() => {
    console.log(`server running on port ${PORT}`);
    
});