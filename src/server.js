import mongoose from 'mongoose';
import app from './app.js';

const PORT = process.env.PORT || 8080;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/db_example?directConnection=true';

mongoose.connect(MONGO_URI)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is running on port http://localhost:${PORT}`);
        });
    })
    .catch(err => {
        console.error('Mongo connection error', err);
        process.exit(1);
    });
