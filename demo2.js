/**
 * Created by Jasonqu on 2017/7/13.
 */
var AppList = require('./proxy/applist');

AppList.getAllAppList(function(err, applist){
    if(err){
        console.log(err)
    }else{
        console.log(applist)
    }
});


var jsonArray = [];
jsonArray.push({
    app_title: "ceshi001"
});
AppList.setAppList({app_title: "ceshi001"}, function(err, result){
    if(err){
        console.log(err);
    }else{
        console.log(result)
    }
});
