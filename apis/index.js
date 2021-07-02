const express = require('express');
const router = express.Router();

/* GET home api. */
router.get('/', function (req, res, next) {
    const data = {
        code: 0,
        msg: "OK",
        data: "Hello Node Server"
    };
    res.json(data);
});

module.exports = router;
