import mongoose from "mongoose";

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

export async function connectMongo(){
    const uri = process.env.MONGODB_URI;
    if(!uri){
        throw new Error("db uri is empty")
    }
    if(cached.conn){
        return cached.conn;
    }

    if (!cached.promise) {
      const options = {
        bufferCommands: false,
      };
  
      cached.promise = mongoose.connect(uri, options).then((mongoose) => {
        return mongoose;
      });
    }
  
    cached.conn = await cached.promise;
    return cached.conn;
}