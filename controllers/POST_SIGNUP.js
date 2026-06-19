import { SignUp } from "../config/db.js"
import { successfulResponse, failedResponse } from "../responses/responses.js";
import { createToken } from "../tokens/jwtToken.js";
/// API_ROUTE

export const POST_SIGNUP = async (req, res) => {
  console.log("User is trying to signup");
  try {
    const success = await SignUp(req.body);
    const { username, email } = req.body;
    res.status(201).json(successfulResponse("User signed up!", {username, token: createToken(username, email)}));
  } catch (signUpError) {

    console.error(`Error[ ${signUpError.name} ]`);
    res.status(400).json(failedResponse("Signup failed", { name: signUpError.name, reason: signUpError.message }));
  }
}





