import { signin_schema } from "../model/SignIn.model.js";
import { GetUser } from "../config/db.js";
import bcrypt from "bcryptjs";

export const POST_SIGNIN = async (req, res) => {
  console.log("User is trying to signin");
  try {
    const user = await GetUser(req.body);
    if (verifyPassword(req.body.password, user.password)) {
      res.status(200).json({
        success: true,
        message: "You are successfuly signed in"
      });
    } else {
      res.status(400).json({
        success: false,
        message: "Password or email is wrong!",
      })
    }
  } catch (signInError) {
    res.status(400).json({
      success: false,
      error: signInError,
    })
    console.log(`Error[ ${signInError}]`);
  }
}

async function verifyPassword(pass, hash) {
  const result = await bcrypt.compare(pass, hash); 
  return result;
}