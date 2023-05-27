import { Router } from 'express';
import authRoutes from './authRoutes';
import auctionRoutes from './auctionRoutes';
import raffleRoutes from './raffleRoutes';
import userRoutes from './userRoutes';
import oauthRoutes from './oauthRoutes';
import nftRoutes from './nftRoutes'

const router = Router()

router.use('/auth', authRoutes)
router.use('/oauth', oauthRoutes)
router.use('/auction', auctionRoutes)
router.use('/raffle', raffleRoutes)
router.use('/user', userRoutes)
router.use('/nft', nftRoutes)

export default router;