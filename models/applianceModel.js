var mongoose = require('mongoose');
var schema = mongoose.Schema;

var applianceSchema = new schema({
    rid: Object,
    applianceName: [String],
    applianceState: [Boolean]
});

var appliance = mongoose.model('appliancesCollection', applianceSchema);

module.exports = appliance;
