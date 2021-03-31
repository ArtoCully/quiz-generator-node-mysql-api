require('dotenv').config();

module.exports = {
  "database": {
      "host": process.env.DB_HOST,
      "port": 3306,
      "user": process.env.DB_USER,
      "password": process.env.DB_PASS,
      "database": process.env.DB_DATABASE
  },
  "secret": process.env.DB_SECRET
}
