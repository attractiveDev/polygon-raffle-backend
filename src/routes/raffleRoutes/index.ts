import { Router } from 'express';
import raffleController from '../../controllers/raffleController';

const router = Router()

router.get('/', raffleController.getRaffles);
router.get('/:id', raffleController.getRaffle);
router.get('/rank/:tokenAddress/:id', raffleController.getRaffleRank)
router.get('/:user', raffleController.getRaffleByUser)
router.post('/updateUserFavourite', raffleController.updateUserFavourite);
router.post('/updateUserFollow', raffleController.updateUserFollow);
// router.post('/', upload.single('image'), verifyAdmin(1), raffleController.createRaffle);
router.post('/', raffleController.createRaffle);
// router.put('/:id', upload.single('image'), verifyAdmin(1), raffleController.updateRaffle);
router.put('/:id', raffleController.updateRaffle);
// router.post('/:id/delete', verifyAdmin(1), raffleController.deleteRaffle);
router.post('/:id/delete', raffleController.deleteRaffle);
router.post('/:id/finish_raffle', raffleController.getFinishRaffle)
router.post('/:id/finish_raffle1155', raffleController.getFinishRaffle1155)

export default router;