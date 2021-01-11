const { Router } = require('express');
const router = Router();
const employees = require('../controllers/employees.controllers');

router.route('/')
    .get(employees.getEmployeers)
    .post(employees.postEmployeer);

router.route('/:id')
    .get(employees.getEmployeer)
    .delete(employees.deleteEmployeer)
    .put(employees.putEmployeer);

module.exports = router;