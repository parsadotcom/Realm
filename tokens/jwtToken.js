import jwt from "jsonwebtoken";
// import { config } from "dotenv"; // TODO: remove them later 
// config();

const tknconfig = { expiresIn: "1h" };

export function createToken(username = null, email = null) {
  const payload = { username, email };
  return jwt.sign(payload, process.env.JWT_SECRET, tknconfig);
}

export function verifyToken(token) {
  return jwt.verify(token, process.env.JWT_SECRET);
}
