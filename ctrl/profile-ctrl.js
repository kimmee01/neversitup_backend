import path from 'path'
import url from 'url'

const __filename = url.fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

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
  })
  let address = {
    ...body.address,
    userId: token.uid,
  }
  await db('address').insert(address)
}

export async function uploadImg({ db, token }, file) {
  let files = Object.values(file)[0]
  let pathFile = path.join(__dirname, `../public/images/${token.uid}`, files.name)
  await files.mv(pathFile, (err) => {
    if (err) throw new Error('fail')
  })
  await db('users').update({ imgPath: `/images/${token.uid}/${files.name}` }).where('userId', token.uid)
}
