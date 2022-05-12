const fs = require('fs');
var promise = require('bluebird');
var CONFIG = require('./appConfig');
var pgp = require('pg-promise')(options);
var DATABASE_PGB = pgp(CONFIG.database.postgres);

module.exports = {
       getAllLocations: getAllLocations,
       getAllLocations_user: getAllLocations_user,
};

var options = {
    promiseLib: promise
};


function getAllLocations(cb) {
      DATABASE_PGB.any("SELECT location, recorder_name, ST_AsText(geom) as geom_text, minibus_name, distance FROM public.stations")
      .then(function (data) {
         cb(null, data);})
       .catch(function (err) {
          cb(err)});
};

function getAllLocations_user(cb) {
      DATABASE_PGB.any("SELECT location, recorder, ST_AsText(geom) as geom_text, minibus_name, date FROM public.minibus_stations")
      .then(function (data_user) {
        cb(null, data_user);})
      .catch(function (err) {
          cb(err)});
}




