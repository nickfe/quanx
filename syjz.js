/**
 鲨鱼记账VIP
 #鲨鱼记账
 ^https://api.shayujizhang.com/account/grant/vip/detail/ url script-response-body https://raw.githubusercontent.com/nickfe/quanx/main/syjz.js
 hostname=api.shayujizhang.com
 */

var body = $response.body;
var url = $request.url;

const path = "/account/grant/vip/detail/";

if (url.indexOf(path) > -1) {

  let obj = JSON.parse(body);
  obj.data.is_buy = 1;
  obj.data.isvip = 1;
  obj.data.days = 30;
  obj.data.vip = {
    isvip: 1,
    days: 60,
  };
  body = JSON.stringify(obj);
}

$done({body});
