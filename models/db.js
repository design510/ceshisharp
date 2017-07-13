var dbPath = require('../config').DbPath;
var mongoose = require('mongoose');
var extend = require('mongoose-schema-extend');
// use custom mongodb url or localhost
mongoose.connect(dbPath || "mongodb://localhost:27017/talk", {
    useMongoClient: true
});
var db = mongoose.connection;
db.on('error', function (err) {
    console.log('connect error')
    process.exit(1);
});
exports.mongoose = mongoose;

//基础Schema
var base = new mongoose.Schema({
    //唯一键
    _id: {type: String, unique: true}
    //创建时间
    // CreateTime: {type: Date},
    // //修改时间
    // ModifyTime: {type: Date}
}, {collection: 'comments', versionKey:false});
exports.base = base;

