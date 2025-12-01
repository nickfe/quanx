/******************************
[rewrite_local]

^https:\/\/flomoapp\.com\/api\/v1\/user\/me\? url script-response-body https://raw.githubusercontent.com/nickfe/quanx/main/flomo.js

[mitm]
hostname = flomoapp.com

*******************************/

var responseBody = $response.body;
var jsonObject = JSON.parse(responseBody);
jsonObject.data.pro_expired_at = "2035-12-31 23:59:59";
jsonObject.data.pro_type = "pro";
jsonObject.data.insight_remaining.used = 0;
jsonObject.data.insight_remaining.remaining = 5;
responseBody = JSON.stringify(jsonObject);
$done(responseBody);