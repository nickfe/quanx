/******************************

[rewrite_local]

^https:\/\/(api\.)?dida365\.com\/api\/v2\/user\/status url script-response-body https://raw.githubusercontent.com/nickfe/quanx/main/dida.js

[mitm] 

hostname = dida365.com

*******************************/

var responseBody = $response.body;
var jsonObject = JSON.parse(responseBody);
jsonObject.proEndDate = "2034-08-28T13:13:16.000+0000";
jsonObject.needSubscribe = false;
jsonObject.pro = true;
responseBody = JSON.stringify(jsonObject);
$done(responseBody);
