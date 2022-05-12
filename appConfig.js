var developmentDatabase = {
    postgres: {
    host: 'ec2-52-54-212-232.compute-1.amazonaws.com',
    port: 5432,
    database: 'dflklgpisre29b',
    user: 'kxwxbmuahnnikn',
    password: 'ff113b7ac0086745ee43338d88a8327aa6a6a1b85fa7e4be36a3585ebd5a1a89'
    }
    }
    
    var connectionString = "postgres://kxwxbmuahnnikn:ff113b7ac0086745ee43338d88a8327aa6a6a1b85fa7e4be36a3585ebd5a1a89@ec2-52-54-212-232.compute-1.amazonaws.com:5432/dflklgpisre29b";
    if (process.env.NODE_ENV == 'production') {
    //Production mode
    if (process.env.DATABASE_URL) {
    developmentDatabase =
    parseConnectionString(process.env.DATABASE_URL);
    } else {
    console.log("process.env.DATABASE_URL empty, connectionStringvariable used");
    developmentDatabase = parseConnectionString(connectionString);
    }
    }else{
    //Development mode
    developmentDatabase = parseConnectionString(connectionString);
    }
    function parseConnectionString(connectionString) {
    if (connectionString) {
    var myRegexp = /(\w+):(\w+)@(.+):(\w+)\/(\w+)/g;
    var match = myRegexp.exec(connectionString);
    if (match.length == 6) {
    developmentDatabase.postgres.user = match[1];
    developmentDatabase.postgres.password = match[2];
    developmentDatabase.postgres.host = match[3];
    developmentDatabase.postgres.port = Number(match[4]);
    developmentDatabase.postgres.database = match[5];
    developmentDatabase.postgres.ssl = true;
    return developmentDatabase;
    }
    }
    console.log("connectionString cannot be parsed");
    return null;
    }
    module.exports = {
    hostname: "http://localhost",
    port: 5656,
    database: {
    postgres: developmentDatabase.postgres
    }
    }
    
