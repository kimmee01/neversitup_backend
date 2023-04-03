import jwt from 'jsonwebtoken'
import md5 from 'md5'

export async function signIn ({ db, config }, body) {
  const hashPassword = md5(`${config.secret}${body.username}${body.password}`)
  let row = await db('users').where({ username: body.username, password: hashPassword }).then(rows => rows[0])
  if (!row) {
    throw new Error('err.user.not.found')
  }
  let { secret, ...tokenOptions } = config.jwt
  let payLoad = {
    uid: row.userId,
  }
  let token = jwt.sign(payLoad, secret, tokenOptions)

  return token
}

export async function register ({ db, config }, body) {
  if (!body.firstname || !body.lastname || !body.username || !body.password) {
    throw new Error('register.err.inputForm')
  }
  const hashPassword = md5(`${config.secret}${body.username}${body.password}`)
  body.password = hashPassword
  let id = await db('users').insert(body)
  let { secret, ...tokenOptions } = config.jwt
  let payLoad = {
    uid: id,
  }
  let token = jwt.sign(payLoad, secret, tokenOptions)
  return token
}
