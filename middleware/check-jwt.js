import jwt from 'jsonwebtoken'
export default function (option = {checkMFA: 1}) {
  return function (req, res, next) {
    // console.log(option)
    try {
      let token = null
      if (req.headers.authorization) {
        token = req.headers.authorization.split(/\s+/)[1]
      } else if (req.query.token) {
        token = req.query.token
      }
      if (!token) {
        throw new Error('err.authoration_required')
      }
      let { secret, ...tokenOptions } = req.config.jwt
      let decoded = jwt.verify(token, secret, tokenOptions)
      if (option.checkMFA && decoded.mfa === 0) {
        throw new Error('err.mfa_required')
      }
      req.token = decoded
      next()
    } catch (err) {
      res.send({
        ok: 0,
        token: '',
        error: err.message,
      })
    }
  }
}
