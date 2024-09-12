import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const options = {};

let client: MongoClient;
let mongo: Promise<MongoClient>

if(!uri){
    throw new Error("mongo uri empty")
}

if(process.env.NODE_ENV === "development"){
    if(!global._mongoClientPromise){
        client = new MongoClient(uri, options);
        global._mongoClientPromise = client.connect();
    }
    mongo = global._mongoClientPromise;
}else{
    client = new MongoClient(uri, options);
    mongo = client.connect();
}

export default mongo;