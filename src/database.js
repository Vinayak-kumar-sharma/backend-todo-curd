const Pool = require('pg').Pool;

const pool = new Pool({
  user: "postgres",
  password:"password",
  port:5432,
  database:"DB_NAME_"
});


module.exports = pool
