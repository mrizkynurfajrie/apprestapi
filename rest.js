'use strict';

const conn = require("./koneksi");

exports.ok = function(values, res){
    var data = {
        'status':200,
        'values':values
    };

     res.json(data);
     res.end();
}