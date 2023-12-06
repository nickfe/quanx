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
  obj.data = {
    ...obj.data,
    is_buy: 1,
    trial_vip: {
      pre_date: '2023-12-06 00:00:00',
      buy_date: 1,
      id: 2069596,
      last_buy_date: '2023-12-06 00:00:00',
      finish_date_ios: '2099.12.06',
      vip_type: 0,
      date_type: 1,
      buy_status: 1,
      days: 9999,
      auto_buy: 0,
      pre_status: 1,
      status: 1,
      finish_date: '2099-12-06 00:00:00',
    },
  };
  body = JSON.stringify(obj);
}

$done({body});
