import { createServer } from 'http';
import app from './config/express';

createServer(app).listen(3000, () => console.log('Server is running on port 3000...'));

