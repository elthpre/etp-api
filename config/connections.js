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

  /***************************************************************************
   *                                                                          *
   * MySQL is the world's most popular relational database.                   *
   * http://en.wikipedia.org/wiki/MySQL                                       *
   *                                                                          *
   * Run: npm install sails-mysql                                             *
   *                                                                          *
   ***************************************************************************/
  selbyAwsMysql: {
    adapter: 'sails-mysql',
    host: 'selbydb.cc2dzmnfwron.us-west-2.rds.amazonaws.com',
    user: 'etp',
    password: 'etp1234',
    database: 'etp'
  },

  cloudant: {
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
   * PostgreSQL is another officially supported relational database.          *
   * http://en.wikipedia.org/wiki/PostgreSQL                                  *
   *                                                                          *
   * Run: npm install sails-postgresql                                        *
   *                                                                          *
   *                                                                          *
   ***************************************************************************/
  relationalDB: {
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
