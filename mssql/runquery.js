const sql = require('mssql')

const config = {
  user: '****',
  password: '*********',
  server: '****',
  database: '*******',
  options: {
        trustServerCertificate: true
      }
}

sql.on('error', err => {
    console.log(err);
})

sql.connect(config).then(pool => {

    return pool.request()
        .query('select blah from word')
}).then(result => {
    console.dir(result)
}).catch(err => {
  console.log(err);
});
