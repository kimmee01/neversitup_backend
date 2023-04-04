import { Router } from 'express'
import checkJwt from '../middleware/check-jwt.js'
import * as ProfileCtrl from '../ctrl/profile-ctrl.js'

const router = Router()

export default router

router.get('/userProfile', checkJwt(), async(req, res) => {
  try {
    const data = await ProfileCtrl.profile(req, req.body)
    res.send({
      ok: 1,
      data: {
        profile: data,
      },
    })
  } catch (err) {
    res.send({ ok: 0, error: err.message })
  }
})

router.post('/updateProfile', checkJwt(), async(req, res) => {
  try {
    const data = await ProfileCtrl.updateProfile(req, req.body)
    res.send({
      ok: 1,
      data: {
        profile: data,
      },
    })
  } catch (err) {
    res.send({ ok: 0, error: err.message })
  }
})

router.post('/uploadImg', checkJwt(), async(req, res) => {
  try {
    const data = await ProfileCtrl.uploadImg(req, req.files)
    res.send({
      ok: 1,
    })
  } catch (err) {
    res.send({ ok: 0, error: err.message })
  }
})
