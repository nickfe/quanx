/**
 ProcessOn解锁编辑
 #ProcessOn
 ^https://www.processon.com/api/personal/user/privilege url script-response-body https://raw.githubusercontent.com/nickfe/quanx/main/processon.js
 hostname=www.processon.com
 */

var body = $response.body;
var url = $request.url;

const path = "/api/personal/user/privilege";

if (url.indexOf(path) > -1) {

  let obj = JSON.parse(body);
  obj.data.privilege = {
    ...obj.data.privilege,
    "privilegeId": "585de568e4b02e6c0aca2d67",
    "userId": "585de4dce4b03a03b1ab1ee8",
    "fileCount": 9999,
    "usedFileCount": 2768,
    "expireTime": "2029-12-31 00:00:00",
    "isJoinedActivity_150521_jc": 0,
    "isJoinedActivity_150521_c": 1,
    "orgExpireTime": null,
    "inActivity": true,
    "createChartStatus": true,
    "member": true,
    "orgMember": false,
    "joinedActivity_af": false,
    "joined2018_ac": false,
    "joinedActivity_1502": false,
    "joinedActivity_ac": false,
    "sendMessage2018": false
  };
  body = JSON.stringify(obj);
}

$done({body});
