export async function profile ({ db, config, token }) {
  let row = await db('users as user')
    .select('*')
    .leftJoin('address', 'user.userId', 'address.userId')
    .where({ 'user.userId': token.uid }).then(rows => rows[0])
  delete row.password
  if (!row) {
    throw new Error('err.user.not.found')
  }
  return row
}

export async function updateProfile({ db, token }, body) {
  await db('users').where({ userId: token.uid }).update({
    firstname: body.firstname,
    lastname: body.lastname,
    imgPath: body.imgPath,
  })
  let address = {
    ...body.address,
    userId: token.uid,
  }
  await db('address').insert(address)
}
