'use strict';

var response = require('./rest');
var connection = require('./koneksi');
const { connect } = require('./koneksi');

exports.index = function(req,res){
    response.ok("Aplikasi Rest API ku Berjalan!",res)
}

//menampilkan semua data mahasiswa
exports.tampilsemuadata = function(req, res){
    connection.query('SELECT * FROM mahasiswa', function(error, rows, fields){
        if(error){
            connection.log(error);
        }else{
            response.ok(rows, res)
        }
    });
};