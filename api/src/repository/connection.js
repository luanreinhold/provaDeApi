import mysql from 'mysql2/promise';

const con = await mysql.createConnection({
    host: process.env.mysql_host,
    user: process.env.mysql_user,
    password: process.env.mysql_pwd,
    database: process.env.mysql_db
})

console.log("DB CONECTADO");

export {con}