export default {
  server: {
    port: 7007,
  },
  jwt: {
    secret: 'kimmeeza',
    algorithm: 'HS512',
    expiresIn: '1h', // 60min
  },
  db: {
    client: 'mysql2',
    connection: {
      host: '127.0.0.1',
      port: '3306',
      user: 'root',
      password: 'password',
      database: 'test',
      timezone: '+07:00',
      dateStrings: true,
      charset: 'utf8mb4_unicode_ci',
    },
  },
}
