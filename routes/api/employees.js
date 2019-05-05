const express = require("express");
const db = require("../../db");
const router = express.Router();

// @route   GET api/employees/departments
// @desc    Get department info
// @access  Public
router.get("/departments", async (req, res) => {
  try {
    let results = await db.departments("SELECT * FROM departments");
    res.json(results);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

// @route   GET api/employees/dept_emp
// @desc    Get dept_emp info
// @access  Public
router.get("/dept_emp", async (req, res) => {
  try {
    let results = await db.dept_emp("SELECT * FROM dept_emp WHERE 1=0");
    res.json(results);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

// @route   GET api/employees/dept_emp
// @desc    Get dept_emp info
// @access  Public
router.get("/dept_emp", async (req, res) => {
  try {
    let results = await db.dept_emp("SELECT * FROM dept_emp");
    res.json(results);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

// @route   GET api/employees/dept_manager
// @desc    Get dept_manager info
// @access  Public
router.get("/dept_manager", async (req, res) => {
  try {
    let results = await db.dept_manager("SELECT * FROM dept_manager");
    res.json(results);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

// @route   GET api/employees/employees
// @desc    Get employee info
// @access  Public
router.get("/employees", async (req, res) => {
  try {
    let results = await db.employees("SELECT * FROM employees");
    res.json(results);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

// @route   GET api/employees/salaries
// @desc    Get salary info
// @access  Public
router.get("/salaries", async (req, res) => {
  try {
    let results = await db.salaries("SELECT * FROM salaries");
    res.json(results);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

// @route   GET api/employees/titles
// @desc    Get titles info
// @access  Public
router.get("/titles", async (req, res) => {
  try {
    let results = await db.titles("SELECT * FROM titles");
    res.json(results);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

module.exports = router;
