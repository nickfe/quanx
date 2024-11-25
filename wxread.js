/**
  微信读书
  # wxread
  ^https:\/\/i\.weread\.qq\.com\/pay\/memberCardSummary url script-response-body https://raw.githubusercontent.com/nickfe/quanx/main/wxread.js
  hostname=i.weread.qq.com
 */

var body = JSON.parse($response.body);

body = {
  ...body,
  "startTime": 1732518242,
  "expiredTime": 2524579200,
  "expired": 0,
  "isPaying": 1,
  "permanent": 1,
  "remainTime": 792060958,
  "payingRemainTime": 792060958,
  "mcardHint": "付费会员有效期至2050年",
  "hintsForRecharge": {
    "buttonTitle": "已是付费会员",
    "buttonSubtitle": "会员有效期至2050年",
    "predictedSavedMoney": 0,
    "predictedChapterPrice": 0,
    "pricePerMonth": 0,
    "sendCoupons": 0
  }
};

$done({
  body: JSON.stringify(body)
});
