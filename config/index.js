var config = require('./config');

module.exports = {
    dbConnectionURL: function(){
        return 'mongodb://' + config.dbuser + ":" + config.dbpassword + '@ds151753.mlab.com:51753/iotswitchdb'
    }
}
