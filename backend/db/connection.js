const Pool = require("pg").Pool;
let pool;
if (process.env.NODE_ENV === "development") {
  pool = new Pool({
    user: process.env.POSTGRES_DB_USER,
    host: process.env.POSTGRES_DB_HOST,
    database: process.env.POSTGRES_DB_NAME,
    password: process.env.POSTGRES_DB_PASSWORD,
    port: process.env.POSTGRES_DB_PORT,
  });
} else {
  pool = new Pool({
    connectionString: process.env.DATABASE_URL,
  });
}

module.exports = pool;
