const url = $request.url;
let res = $response.body;
if (url.includes('people') || url.includes('/usersetting')) {
  res = res
    .replace(/("memberStatus":)\d+/g, '$1 1')
    .replace(/("username":)".*?"/g, '$1 "Daniel"')
    .replace(/("buttonText":)".*?"/g, '$1 "永久会员"')
    .replace(/("hasPaid":)\w+/g, '$1 true')
    .replace(/("downLoadAll":)\w+/g, '$1 true')
    .replace(/("preview":)\w+/g, '$1 true')
    .replace(/("status":)\w+/g, '$1 true')
    .replace(/("startEnable":)\w+/g, '$1 true')
    .replace(/("errCode":)\d+/g, '$1 0')
}
$done({ body: res })
