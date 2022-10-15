const { createPool } = require("mysql");

const pool = createPool({
  port: 5000,
  host: "localhost",
  user: "",
  password: "",
  database: "",
});

module.exports = pool;
