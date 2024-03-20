import { Router } from 'express';
import {register,login,createAdminRole } from '../controllers/userController';

const router = Router();

router.post('/register', register);
router.post('/login', login);
router.post('/register/admin', createAdminRole);

export default router;
