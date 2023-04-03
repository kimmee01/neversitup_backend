
export async function createOrUpdateOrders({ db, token }, body) {
  let list = JSON.parse(JSON.stringify(body.list))
  delete body.list
  if (!body.ordersId) {
    body.userId = token.uid
    if (!Object.keys(body.address).length) {
      delete body.address
    }
    let id = await db('orders').insert(body)
    for (let i of list) {
      i.orderId = id
    }
    await db('orderlists').insert(list)
  } else {
    await db('orderlists').del().whereIn('orderListId', body.listDel)
    let inseartData = list.filter(data => !data.orderListId)
    for (let i of inseartData) {
      i.orderId = body.ordersId
    }
    let updateData = list.filter(data => data.orderListId)
    for (let item of updateData) {
      await db('orderlists').update({
        productId: item.productId,
        qty: item.qty,
        price: item.price,
      }).where('orderListId', item.orderListId)
    }
    if (inseartData.length > 0) {
      await db('orderlists').insert(inseartData)
    }
  }
}
export async function getOrder({ db, token }, body) {
  let rows = await db('orders').where({ userId: token.uid }).where(query => {
    if (body.status) {
      query.where('status', body.status)
    }
  })
  let listId = rows.map(data => data.ordersId)
  let list = await db('orderLists').whereIn('orderId', listId)
  for (let r of rows) {
    r.list = []
    for (let l of list) {
      if (l.orderId === r.ordersId) {
        r.list.push(l)
      }
    }
  }
  return rows
}

export async function cancelOrder({ db, token }, body) {
  let rows = await db('orders').where({ orderId: body.orderId }).update({ isActive: 'N' })
  return rows
}
