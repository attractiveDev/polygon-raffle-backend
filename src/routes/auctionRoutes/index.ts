import { Router } from 'express';
import auctionController from '../../controllers/auctionController';
const router = Router()

router.get('/', auctionController.getAuctions);
router.get('/:id', auctionController.getAuction);
// router.post('/', upload.single('image'), verifyAdmin(0), auctionController.createAuction);
router.post('/', auctionController.createAuction);
// router.put('/:id', upload.single('image'), verifyAdmin(0), auctionController.updateAuction);
router.put('/:id', auctionController.updateAuction);
// router.post('/:id/delete', verifyAdmin(0), auctionController.deleteAuction);
router.post('/:id/delete', auctionController.deleteAuction);

export default router;