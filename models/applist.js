var extend = require('mongoose-schema-extend');
var db = require('./db'),
    mongoose = db.mongoose,
    base = db.base;

var applistSchema = base.extend({
    app_title: {type: String},
    app_downnum: {type: String},
    app_size: {type: String},
    app_version: {type: String},
    app_score_good: {type: Number},
    app_score_bad: {type: Number},
    app_commentnumber: {type: String},
    app_developer: {type: String},
    app_update: {type: String},
    app_icon: {type: String},
    app_download: {type: String},
    app_packagename: {type: String}
});
console.log(applistSchema)
exports.ApplistModel = mongoose.model('appchinasofts', applistSchema, 'appchinasoft');
