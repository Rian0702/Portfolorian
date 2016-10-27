var express = require('express');
var router = express.Router();
var authCheck = require('../bin/authservice');
var multer = require('multer');
var loggerService = require('../bin/loggerService');

var storage = multer.diskStorage({ //multers disk storage settings
    destination: function(req, file, cb) {
        cb(null, '../server/public/profileImages')
    },
    filename: function(req, file, cb) {
        var datetimestamp = Date.now();
        cb(null, file.fieldname + '-' + datetimestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length - 1])
    }
});
var upload = multer({ //multer settings
    storage: storage
}).single('file');

router.post('/', upload,function(req, res) {
    // upload(req, res, function(err) {
    //     if (err) {
    //         loggerService.log('error', err);
    //         res.json({
    //             error_code: 1,
    //             err_desc: err
    //         });
    //         return;
    //     }
    //     res.json({
    //         error_code: 0,
    //         err_desc: null,
    //         file: req.file,
    //     });
    // })
    res.json(req.file.filename);
})

module.exports = router;
