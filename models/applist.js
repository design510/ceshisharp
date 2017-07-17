var extend = require('mongoose-schema-extend');
var db = require('./db'),
    mongoose = db.mongoose,
    baseSchema = db.baseSchema;
// var base = baseSchema.extend({
//     app_title: {type: String},
//     app_downnum: {type: String},
//     app_size: {type: String},
//     app_version: {type: String},
//     app_score_good: {type: Number},
//     app_score_bad: {type: Number},
//     app_commentnumber: {type: String},
//     app_developer: {type: String},
//     app_update: {type: String},
//     app_icon: {type: String},
//     app_download: {type: String},
//     app_packagename: {type: String}
// });
// console.log(base)
baseSchema.add({
    app_title: String
    // 分类名称
    // CateName: {type: String},
    // //分类别名
    // Alias: {type: String},
    // //图标地址
    // Img: {type: String},
    // //链接地址
    // Link: {type: String}
});

exports.ApplistModel = mongoose.model('comments', baseSchema, 'comment');
