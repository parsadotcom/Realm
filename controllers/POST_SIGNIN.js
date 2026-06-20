import { signin_schema } from "../model/SignIn.model.js";
import { GetUser } from "../config/db.js";
import bcrypt from "bcryptjs";
import { failedResponse, successfulResponse } from "../responses/responses.js";
import { createToken } from "../tokens/jwtToken.js";


export const POST_SIGNIN = async (req, res) => {
  console.log("User is trying to signin");
  try {
    const user = await GetUser(req.body);
    if (verifyPassword(req.body.password, user.password)) {
      res.status(200).json(successfulResponse("You successfully signed into your account.", {
        token: createToken(req.body.username, req.body.email)
      }));
    } else {
      res.status(400).json(failedResponse("Wrong Password", { type: "authentication" }));
    }
  } catch (signInError) {
    res.status(400).json(failedResponse("Unsuccessful signin", { name: signInError.name, reason: signInError.message }));
    console.log(`Error[ ${signInError}]`);
  }
}

async function verifyPassword(pass, hash) {
  const result = await bcrypt.compare(pass, hash);
  return result;
}