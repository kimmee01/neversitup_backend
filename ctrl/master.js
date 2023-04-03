
export async function getProducts({ db, config, token }, body) {
  let rows = await db('products').where(query => {
    if (body.productId) {
      query.where('productId', body.productId)
    }
  })
  return rows
}

export async function createOrUpdateProducts({ db }, body) {
  if (!body.productId) {
    await db('products').insert(body)
  } else {
    await db('products').update(body).where({ productId: body.productId })
  }
}
