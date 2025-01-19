import { MongoClient } from 'mongodb';

// MongoDB URI and Database Name
const uri = process.env.MONGO_URI;
const dbName = process.env.MONGO_DB_NAME;

// Create a MongoDB client
export const client = new MongoClient(uri);

export const connectDB = async () => {
  try {
    await client.connect();
    console.log('Connected to MongoDB!');
    return client.db(dbName);
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
  }
}


