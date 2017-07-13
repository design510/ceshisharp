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
