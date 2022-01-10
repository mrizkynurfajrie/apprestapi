'use strict';

module.exports = function(app){
    var jsonku = require('./controller');

    app.route('/')
        .get(jsonku.index);

    app.route('/tampil')
        .get(jsonku.tampilsemuadata);

    app.route('/tampil/:id')
        .get(jsonku.tampilberdasarkanid);

    app.route('/tambah')
        .post(jsonku.tambahmahasiswa);

    app.route('/ubah')
        .put(jsonku.ubahdatamahasiswa);

    app.route('/hapus')
        .delete(jsonku.hapusdatamahasiswa);
}