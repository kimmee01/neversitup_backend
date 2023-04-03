import { Router } from 'express'
import AuthRouter from './auth.js'
import MasterRouter from './master.js'
import ProfileRouter from './profile.js'
import OrderRouter from './orders.js'

import checkJwt from '../middleware/check-jwt.js'

const router = Router()

router.get('/', async (req, res) => {
  res.send({ ok: 1 })
})

router.use('/auth', AuthRouter)
router.use('/master', checkJwt(), MasterRouter)
router.use('/profile', ProfileRouter)
router.use('/orders', checkJwt(), OrderRouter)

// , checkJwt()
export default router
