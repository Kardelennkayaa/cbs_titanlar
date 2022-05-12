const fs = require('fs');
var promise = require('bluebird');
var CONFIG = require('./appConfig');
var pgp = require('pg-promise')(options);
var DATABASE_PGB = pgp(CONFIG.database.postgres);

module.exports = {
       getAllLocations: getAllLocations,
};

var options = {
    promiseLib: promise
};


function getAllLocations(cb) {
      DATABASE_PGB.any("SELECT location, recorder_name,ST_AsText(geom) as geom_text, minibus_name, distance, driver, contact, start_time, path_def FROM hacettepe_servis")
      .then(function (data) {
         cb(null, data);})
       .catch(function (err) {
          cb(err)});
}



