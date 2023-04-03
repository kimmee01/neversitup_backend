import { Router } from 'express'
import * as OrderCtrl from '../ctrl/order-ctrl.js'

const router = Router()

export default router

router.post('/orderList', async(req, res) => {
  try {
    const data = await OrderCtrl.getOrder(req, req.body)
    res.send({
      ok: 1,
      data,
    })
  } catch (err) {
    res.send({ ok: 0, error: err.message })
  }
})

router.post('/createOrUpdateOrderCtrl', async(req, res) => {
  try {
    const data = await OrderCtrl.createOrUpdateOrders(req, req.body)
    res.send({
      ok: 1,
      data,
    })
  } catch (err) {
    res.send({ ok: 0, error: err.message })
  }
})
