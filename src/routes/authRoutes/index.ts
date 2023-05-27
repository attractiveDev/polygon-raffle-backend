import { Router } from 'express';
import authController from '../../controllers/authController';
const router = Router()

router.post('/verify', authController.verify);

export default router;