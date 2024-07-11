/*************************************

circle

**************************************

[rewrite_local]
^https?://circlereader.com/api/user/(current|get) url script-response-body https://raw.githubusercontent.com/nickfe/quanx/main/circle.js

[mitm]
hostname = circlereader.com

*************************************/


const body = JSON.stringify({
  ...JSON.parse($response.body),
  "expire": "2099-12-31T00:00:00",
  "roles": [
    "member"
  ],
})
$done({ body })
