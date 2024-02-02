/*************************************

circle

**************************************

[rewrite_local]
^https?://circlereader.com/api/user/current url script-response-body https://raw.githubusercontent.com/nickfe/quanx/main/circle.js

[mitm]
hostname = circlereader.com

*************************************/


const body = JSON.stringify({
  "uid": "1",
  "avatar": "",
  "expire": "2099-12-31T00:00:00",
  "mail": "test@test.com",
  "roles": [
    "member"
  ],
  "name": "永久会员"
})
$done({ body })
