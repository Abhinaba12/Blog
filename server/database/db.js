import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL = `mongodb+srv://mernapp:7ABBAAE2@mern.9y0dz4o.mongodb.net/mernapp`;
    try {
        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;