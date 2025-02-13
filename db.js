/** Database for lunchly */

require('dotenv').config({ path: "./.env" })
const pg = require("pg");

const db = new pg.Client(`postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@127.0.0.1:5432/lunchly`);

db.connect();

module.exports = db;
