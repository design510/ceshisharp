/**
 * Created by Jasonqu on 2016/11/2.
 */


//var sortarr = [22,65,86,34,12,45,93,35];
//
////数组排序 NO1
//Array.prototype.mysort = function(){
//    for(var i=0;i<this.length-1;i++){
//        for(var j=i+1;j<this.length;j++){
//            if(this[i] > this[j]){
//                var temp = this[i];
//                this[i] = this[j];
//                this[j] = temp;
//            }
//        }
//    }
//    console.log(this);
//    return this;
//};
//
//sortarr.mysort();
//
////数组排序  NO2
//function mysort2(){
//    var temparr = arguments[0];
//    for(var i=0;i<temparr.length-1;i++){
//        for(var j=i+1;j<temparr.length;j++){
//            if(temparr[i] > temparr[j]){
//                var temp = temparr[i];
//                temparr[i] = temparr[j];
//                temparr[j] = temp;
//            }
//        }
//    }
//    console.log(temparr);
//    return temparr;
//}
//
//mysort2(sortarr);








//统计字符串中出现次数最多的字母
//function strToMore(str){
//    if(typeof str != "string"){
//        console.log("不是字符串");
//        return;
//    }
//    var tempArr = str.split('');
//    var tempJson = {};
//    for(var i=0; i<tempArr.length-1; i++){
//        if(!tempJson[tempArr[i]]){
//            tempJson[tempArr[i]] = 1;
//        }else{
//            tempJson[tempArr[i]] += 1;
//        }
//    }
//    console.log(tempJson);
//
//    var tempKey = '',tempValue = 1;
//    for(k in tempJson){
//        if(tempJson[k] >= tempValue){
//            tempValue = tempJson[k];
//            tempKey = k;
//        }
//    }
//    console.log(tempKey + ' 出现了' + tempValue + '次');
//    return [tempKey, tempValue];
//
//}
//
//console.log(strToMore('ddrhkwggiiopxdhhhswqmhhdfhohhshnwezvh'));


//var list = [{"id":1},{"id":1},{"id":1},{"id":1}];
//
//for(var i in list){
//    (function(a){
//        setTimeout(function(){
//            console.log(a)
//        },300)
//    })(i)
//}





