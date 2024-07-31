const express = require('express');
const cors = require('cors');
const sql = require('mssql');

const app = express();
app.use(express.json());
app.use(cors());

const dbConfig = {
  user: 'EdgarHG',
  password: 'Victorios17',
  server: 'localhost\\TEW_SQLEXPRESS',
  database: 'LukyTV',
  options: {
    encrypt: false, // for Azure SQL
    trustServerCertificate: false // change to false for production
  }
};

app.get('/api/movies', async (req, res) => {
  try {
    let pool = await sql.connect(dbConfig);
    let result = await pool.request().query('SELECT * FROM Movies');
    res.json(result.recordset);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
