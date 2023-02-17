
const mariadb=require('mariadb')

const config={
    host: 'precios-1.c0f6dm2ucnlg.us-east-2.rds.amazonaws.com',
    port: 3306,
    user: 'candidatoPrueba',
    password: 'gaspre21.M',
    database: 'prueba'
}

class DBConnector{
    dbconnector = mariadb.createPool(config);
  
    async query(sQuery){
      var conn = await this.dbconnector.getConnection();
      var ret = null;
      await conn.query(sQuery)
        .then(data =>{
          ret = data;
          console.log(data)
          conn.end()
        })
        .catch(err =>{
          console.log(err)
          conn.end()
        })
      return ret;
    }
  }
  
  module.exports = new DBConnector();
