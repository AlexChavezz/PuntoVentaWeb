const mysql = require('mysql2');


const connection = mysql.createConnection({
    user: "alexis",
    password: "$vY:c5Lfb:d*AN2W",
    host: "10.0.1.251",
    database: "TEST",
})

connection.connect((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Connected");
    }
})

connection.query("SHOW TABLES", (err, results) => {
    if (err) {
        console.log(err);
    } else {
        console.log(results);
    }
})

connection.end();