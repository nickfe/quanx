/**
 * uPaste
 * ^https://api.7littlemen.com/paste/native_config.json url script-response-body https://raw.githubusercontent.com/nickfe/quanx/main/uPaste.js
 * hostname=7littlemen.com
 */

let body = $response.body
let obj = JSON.parse(body)
obj = {
  ...obj,
  "rating_trigger_count":20,
  "enable_rating":false,
  "promote_trigger_count":999999,
  "enable_free_promote":true,
  "enable_promote":true,
}
body = JSON.stringify(obj)
$done({ body })

