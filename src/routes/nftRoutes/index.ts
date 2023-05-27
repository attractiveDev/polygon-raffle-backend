import { Router } from 'express'

const router = Router()

import ctrl from '../../controllers/nftController'

router.get('/:wallet', ctrl.getEthNftsByAddress);

export default router