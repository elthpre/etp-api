/**
 * Connections
 * (sails.config.connections)
 *
 * `Connections` are like "saved settings" for your adapters.  What's the difference between
 * a connection and an adapter, you might ask?  An adapter (e.g. `sails-mysql`) is generic--
 * it needs some additional information to work (e.g. your database host, password, user, etc.)
 * A `connection` is that additional information.
 *
 * Each model must have a `connection` property (a string) which is references the name of one
 * of these connections.  If it doesn't, the default `connection` configured in `config/models.js`
 * will be applied.  Of course, a connection can (and usually is) shared by multiple models.
 * .
 * Note: If you're using version control, you should put your passwords/api keys
 * in `config/local.js`, environment variables, or use another strategy.
 * (this is to prevent you inadvertently sensitive credentials up to your repository.)
 *
 * For more information on configuration, check out:
 * http://sailsjs.org/#!/documentation/reference/sails.config/sails.config.connections.html
 */

module.exports.connections = {

  /***************************************************************************
   *                                                                          *
   * Local disk storage for DEVELOPMENT ONLY                                  *
   *                                                                          *
   * Installed by default.                                                    *
   *                                                                          *
   ***************************************************************************/
  localDiskDb: {
    adapter: 'sails-disk'
  },
  /*adapter		: 'sails-couchdb-orm',
      host			: url && url.hostname,
      https			: url && (url.protocol === 'https'),
      username	: process.env.COUCHDB_USERNAME || 'admin',
      password	: process.env.COUCHDB_PASSWORD || 'admin'*/
  bluemix: {
    adapter: 'sails-couchdb-orm',
    host: process.env.CLOUDDB_HOST,
    https: true,
    //host: process.env.CLOUDDB_HOST,//global.bluemix || process.env.CLOUDDB_HOST ? process.env.CLOUDDB_HOST || global.bluemix.cloudantNoSQLDB[0].credentials.host  : null,
    port: process.env.CLOUDDB_PORT, //global.bluemix || process.env.CLOUDDB_PORT ? process.env.CLOUDDB_PORT || global.bluemix.cloudantNoSQLDB[0].credentials.port  : null,
    username: process.env.CLOUDDB_USER, //global.bluemix || process.env.CLOUDDB_USER ? process.env.CLOUDDB_USER || global.bluemix.cloudantNoSQLDB[0].credentials.username : null,
    password: process.env.CLOUDDB_PASS, //global.bluemix || process.env.CLOUDDB_PASS ? process.env.CLOUDDB_PASS || global.bluemix.cloudantNoSQLDB[0].credentials.password  : null
    database: 'etp'
  },

  /***************************************************************************
   *                                                                          *
   * MySQL is the world's most popular relational database.                   *
   * http://en.wikipedia.org/wiki/MySQL                                       *
   *                                                                          *
   * Run: npm install sails-mysql                                             *
   *                                                                          *
   ***************************************************************************/
  someMysqlServer: {
    adapter: 'sails-mysql',
    host: 'YOUR_MYSQL_SERVER_HOSTNAME_OR_IP_ADDRESS',
    user: 'YOUR_MYSQL_USER',
    password: 'YOUR_MYSQL_PASSWORD',
    database: 'YOUR_MYSQL_DB'
  },

  /***************************************************************************
   *                                                                          *
   * MongoDB is the leading NoSQL database.                                   *
   * http://en.wikipedia.org/wiki/MongoDB                                     *
   *                                                                          *
   * Run: npm install sails-mongo                                             *
   *                                                                          *
   ***************************************************************************/
  someMongodbServer: {
    adapter: 'sails-mongo',
    host: 'localhost',
    port: 27017,
    // user: 'username',
    // password: 'password',
    // database: 'your_mongo_db_name_here'
  },

  /***************************************************************************
   *                                                                          *
   * PostgreSQL is another officially supported relational database.          *
   * http://en.wikipedia.org/wiki/PostgreSQL                                  *
   *                                                                          *
   * Run: npm install sails-postgresql                                        *
   *                                                                          *
   *                                                                          *
   ***************************************************************************/
  postgres: {
    adapter: 'sails-postgresql',
    host: 'selbysdb.cc2dzmnfwron.us-west-2.rds.amazonaws.com',
    user: 'etp',
    password: 'etp',
    database: 'etp'
  }


  /***************************************************************************
   *                                                                          *
   * More adapters: https://github.com/balderdashy/sails                      *
   *                                                                          *
   ***************************************************************************/

};
