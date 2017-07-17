/**
 * Created by Jasonqu on 2017/7/12.
 */
var shortid = require('shortid');
var applistModel = require('../models/applist').ApplistModel;

/**
 * @purpose 查找数据
 * @param callback
 */
exports.getAllAppList = function(callback) {
    applistModel.find(function (err, applist) {
        if (err) {
            return callback(err);
        }
        return callback(null, applist);
    });
};

/**
 * @purpose 写入数据
 * @param callback
 */
exports.setAppList = function(array, callback) {
    // var jsonArray = [];
    // if (array.length > 0) {
    //     array.forEach(function (item) {
    //         jsonArray.push({
    //             _id: shortid.generate(),
    //             CreateTime: new Date(),
    //             ModifyTime: new Date(),
    //             app_title: item.app_title
    //         });
    //     });
    // }
    var jsonArray = {
        _id: shortid.generate(),
        CreateTime: new Date(),
        ModifyTime: new Date(),
        app_title: array.app_title
    };
    applistModel.create(jsonArray, function (err, result) {
        if (err) {
            return callback(err);
        }
        return callback(null, result);
    });
};

