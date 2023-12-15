/**
 * XTerminal
 * ^https://api.xterminal.cn/user url script-response-body https://raw.githubusercontent.com/nickfe/quanx/main/xTerminal.js
 * hostname=api.xterminal.cn
 */

let body = $response.body
let obj = JSON.parse(body)
obj = {
  ...obj,
  memberEnd: "2099-12-31T23:59:59.999Z",
}
body = JSON.stringify(obj)
$done({ body })
