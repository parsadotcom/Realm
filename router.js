import { Router } from 'express';
import { GET_HEALTH } from './controllers/GET_HEALTH.js';
import { POST_SIGNUP } from './controllers/POST_SIGNUP.js';
import { m_userValidation } from './middlewares/validation/User.validation.js';
import { m_hashPassword } from './middlewares/m_passwordHashMiddleware.js';
import { POST_SIGNIN } from './controllers/POST_SIGNIN.js';
import { m_signInValidation } from './middlewares/validation/User.signin.validation.js';
// check the options of router!

export const router = new Router();

router.get("/health", GET_HEALTH);
router.post("/users/api/v1/signup", m_userValidation, m_hashPassword, POST_SIGNUP);
router.post("/users/api/v1/signin", m_signInValidation, POST_SIGNIN); /// UPGRADE: here!
