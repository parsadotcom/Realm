import { MongoClient } from "mongodb";
import { config } from "dotenv";
import { mongoConfig } from "./mongoConfig.js"

config();
const STRING = process.env.MONGO_STRING;  
const client = new MongoClient(STRING, mongoConfig);
  
let db;

async function runDatabase(dbName) {
  if (!db) {
    await client.connect();
    return client.db(dbName);
  } else {
    throw Error("db is already running!")
  }

}

try {
  db = await runDatabase("X");
} catch (e) {
  console.error(`Error: e`);
}


export async function SignUp(userData) {
  try {
    const users = db.collection("users");
    await users.insertOne(userData);
    return true;
  } catch (error) {
    return false;
  }

}

export async function GetUser(userData) {
  try {
    const users = db.collection("users");
    const user = await users.findOne({email: userData.email});
    if (user) {
      return user;
    }
  } catch (error) {
    return false;
  }
}