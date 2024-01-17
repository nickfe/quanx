/**
* uPaste
[rewrite_local]
^https?:\/\/api\.7littlemen\.com\/paste\/ url script-response-body https://raw.githubusercontent.com/nickfe/quanx/main/uPaste.js
[mitm]
hostname=api.7littlemen.com
*/

const url = $request.url
let body = $response.body
if (url.includes('native_config.json')) {
  // let obj = JSON.parse(body)
  let obj = body // 原返回值不是标准的JSON，带了尾逗号
  obj = {
    ...obj,
    "rating_trigger_count":20,
    "enable_rating":false,
    "promote_trigger_count":999999,
    "enable_free_promote":true,
    "enable_promote":true,
  }
  body = JSON.stringify(obj)
}
$done({ body })

