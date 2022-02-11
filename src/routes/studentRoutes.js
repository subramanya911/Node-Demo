const express = require('express');
const { demoApi } = require('../controllers/studentCOntroller');
const {getdemoApi} =require('../controllers/getStudents')
const router = express.Router();

router.post('/create', demoApi);
router.get('/', getdemoApi);

module.exports = router;