const config = require("../config/default.json");
const mysqlPassword = config.mysqlPassword;
const mysql = require("mysql");

const pool = mysql.createPool({
  connectionLimit: 10,
  user: "root",
  password: mysqlPassword,
  database: "employees",
  host: "localhost",
  port: "3306"
});

let employeesdb = {};

// departments query
employeesdb.departments = q => {
  return new Promise((resolve, reject) => {
    pool.query(q, (err, results) => {
      if (err) return reject(err);

      return resolve(results);
    });
  });
};

// dept_emp query
employeesdb.dept_emp = q => {
  return new Promise((resolve, reject) => {
    pool.query(q, (err, results) => {
      if (err) return reject(err);

      return resolve(results);
    });
  });
};

// dept_manager query
employeesdb.dept_manager = q => {
  return new Promise((resolve, reject) => {
    pool.query(q, (err, results) => {
      if (err) return reject(err);

      return resolve(results);
    });
  });
};

// employees query
employeesdb.employees = q => {
  return new Promise((resolve, reject) => {
    pool.query(q, (err, results) => {
      if (err) return reject(err);

      return resolve(results);
    });
  });
};

// salaries query
employeesdb.salaries = q => {
  return new Promise((resolve, reject) => {
    pool.query(q, (err, results) => {
      if (err) return reject(err);

      return resolve(results);
    });
  });
};

// titles query
employeesdb.titles = q => {
  return new Promise((resolve, reject) => {
    pool.query(q, (err, results) => {
      if (err) return reject(err);

      return resolve(results);
    });
  });
};

module.exports = employeesdb;
