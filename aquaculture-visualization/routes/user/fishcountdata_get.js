var express = require('express');
var router = express.Router();    
var db = require('../../utils/db');

router.post('/', async function (req, res, next) {
    console.log('fish_count_data_get');
    const { startDate, endDate } = req.body;
    if (!startDate || !endDate) {
        return res.status(400).json({ message: 'Start date and end date are required' });
    }
    console.log('before sql');
    const sqlQuery = 'SELECT * FROM fish_count_data WHERE date BETWEEN ? AND ?';
    console.log('before query');
    result = await db.query(sqlQuery, [startDate, endDate])
    res.json(result);
    
    console.log('should never be here');
});
module.exports = router;

