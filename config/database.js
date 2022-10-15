const { createPool } = require("mysql");

const pool = createPool({
  port: 5000,
  host: "localhost",
  user: root,
  password: "",
  database: fiducia,
});

module.exports = pool;
