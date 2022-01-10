'use strict';

var response = require('./rest');
var connection = require('./koneksi');


exports.index = function (req, res) {
    response.ok("Aplikasi Rest API ku Berjalan!", res)
}

//menampilkan semua data mahasiswa
exports.tampilsemuadata = function (req, res) {
    connection.query('SELECT * FROM mahasiswa', function (error, rows, fields) {
        if (error) {
            console.log(error);
        } else {
            response.ok(rows, res)
        }
    });
};

//menampilkan semua data mahasiswa berdasarkan ID
exports.tampilberdasarkanid = function (req, res) {
    let id = req.params.id;
    connection.query('SELECT * FROM mahasiswa WHERE id_mahasiswa = ?', [id],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok(rows, res)
            }
        }
    );
};