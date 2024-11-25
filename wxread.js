/**
  微信读书
  # wxread
  ^https:\/\/i\.weread\.qq\.com\/pay\/memberCardSummary url script-response-body https://raw.githubusercontent.com/nickfe/quanx/main/wxread.js
  hostname=i.weread.qq.com
 */

var body = JSON.parse($response.body);

body = {
  ...body,
  freeBookIds: ['3300106023', 3300106023]
};

$done({
  body: JSON.stringify(body)
});
