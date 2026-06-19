import bcrypt from "bcryptjs";

async function hashPassword(pass) {
  return await bcrypt.hash(pass, 2);
}

export async function m_hashPassword(req, res, next) {

  try {
    req.body.password = await hashPassword(req.body.password);
    next();
  } catch (error) {
    next(error);
  }
  
}