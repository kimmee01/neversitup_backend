import { Router } from 'express'
import jwt from 'jsonwebtoken'
import checkJwt from '../middleware/check-jwt.js'
import * as AuthCtrl from '../ctrl/auth-ctrl.js'
const router = Router()

export default router

router.post('/signin', async(req, res) => {
  try {
    const data = await AuthCtrl.signIn(req, req.body)
    res.send({
      ok: 1,
      data: {
        token: data,
      },
    })
  } catch (err) {
    res.send({ ok: 0, error: err.message })
  }
})

router.post('/token', checkJwt(), async (req, res) => {
  try {
    let decoded = req.token
    delete decoded.iat
    delete decoded.exp

    if (req?.body?.pid) {
      decoded.pid = req?.body?.pid
      await AuthCtrl.updateAdmin(req)
    }
    let { secret, ...tokenOptions } = req.config.jwt
    let token = jwt.sign(decoded, secret, tokenOptions)

    res.send({
      ok: 1,
      token,
    })
  } catch (err) {
    res.send({
      ok: 0,
      error: err.message,
    })
  }
})

router.post('/register', async(req, res) => {
  try {
    const data = await AuthCtrl.register(req, req.body)
    res.send({
      ok: 1,
      data: {
        token: data,
      },
    })
  } catch (err) {
    res.send({ ok: 0, error: err.message })
  }
})
