import { signin_schema } from "../../model/SignIn.model.js";

export const m_signInValidation = async (req, res, next) => {
  try {
    console.log("Extracting signin data for validation");
    const { email, password } = req.body;
    await validSignIn(res, { email, password });
    next();
  } catch (signInValidationError) {
    next(signInValidationError);
  }
}

async function validSignIn(res, { email, password }) {
  console.log("Validating email and password for signin");
  const valResult = await signin_schema.validateAsync({ email, password });
  sendResults(res, valResult);
}

function sendResults(res, valResult) {
  if (valResult.error) {
    res.status(400).json({ errored: true, message: valResult.error.details[0].message });
  }
}
