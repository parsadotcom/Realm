import { createToken } from "../tokens/jwt.sign";

const m_signToken = (req, res, next) => {

  try {
    const payload = {
      username: req.body.username,
      email: req.body.email,
    };

    const jwt = createToken(payload);
    next();
  } catch (signError) {
    next(signError);
  }
}