const mysql = require("mysql2");

const connection = mysql.createPool({
  host: "bootcamp-tht.sre.wize.mx",
  user: "secret",
  password: "noPow3r",
  database: "bootcamp_tht",
});

let query = function (sql, values) {
  return new Promise((resolve, reject) => {
    connection.getConnection(function (err, connection) {
      if (err) {
        reject(err);
      } else {
        connection.query(sql, values, (err, rows) => {
          if (err) {
            reject(err);
          } else {
            resolve(rows);
          }
          connection.release();
        });
      }
    });
  });
};

module.exports = query;
