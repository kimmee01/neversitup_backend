import { Router } from 'express'
import * as masterCtrl from '../ctrl/master.js'

const router = Router()

export default router

router.post('/products', async(req, res) => {
  try {
    let data = await masterCtrl.getProducts(req, req.body)
    res.send({
      ok: 1,
      data,
    })
  } catch (err) {
    res.send({
      ok: 0,
      message: err.message,
    })
  }
})
router.post('/product', async(req, res) => {
  try {
    let data = await masterCtrl.createOrUpdateProducts(req, req.body)
    res.send({
      ok: 1,
      data,
    })
  } catch (err) {
    res.send({
      ok: 0,
      message: err.message,
    })
  }
})
