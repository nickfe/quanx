/**
 * XTerminal
 * ^https://api.xterminal.cn/user url script-response-body https://raw.githubusercontent.com/nickfe/quanx/main/xTerminal.js
 * hostname=api.xterminal.cn
 */

let body = $response.body
let obj = JSON.parse(body)
obj = {
  ...obj,
  memberEnd: "2025-01-01T00:00:00.000Z",
}
body = JSON.stringify(obj)
$done({ body })
