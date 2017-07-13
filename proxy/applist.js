/**
 * Created by Jasonqu on 2017/7/12.
 */
var applistModel = require('../models/applist').ApplistModel;

exports.getAllAppList = function(callback) {
    applistModel.find(function (err, applist) {
        if (err) {
            return callback(err);
        }
        return callback(null, applist);
    });
};



