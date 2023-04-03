import knex from 'knex'

export default function(config) {
  let db = knex(config)
  return db
}
