import { Router } from 'express';
import userController from '../../controllers/userController';

const router = Router()


router.get('/:wallet', userController.getUser);
router.post('/', userController.createUser);
router.get('/discord/status/:wallet', userController.checkDiscordStatus);
router.get('/twitter/status/:wallet', userController.checkTwitterStatus);
router.post('/disconnect-social/:wallet/:social', userController.disconnectSocial);

export default router;