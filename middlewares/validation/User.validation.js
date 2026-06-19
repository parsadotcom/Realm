import { user_schema } from "../../model/User.model.js";

export const m_userValidation = async (req, res, next) => {
  try {
    console.log("Extracting user's data");
    const { username, age, gender, email, password } = req.body;
    await validateUser(res, { username, age, gender, email, password });
    next();
  } catch (validationError) {
    next(validationError);
  }
}

async function validateUser(res, userData) {
  console.log("Validating user's data")
  const valResult = await user_schema.validateAsync(userData);
  console.log("Result of validation: ", valResult);
  sendResults(res, valResult);
}

function sendResults(res, valResult) {
  if (valResult.error) {
    res.status(400).json({ errored: true, message: valResult.error.details[0].message });
  }
}

