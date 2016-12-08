var http = require('http');
var querystring = require('querystring');
var postData = querystring.stringify({
    'msg' : 'Hello World!'
});
var options = {
    hostname:'www.xiangqu.com',
    port:80,
    path:'/upload',
    method:'POST',
    headers:{
        'Content-Type':'application/x-www-form-urlencoded',
        'Content-Length': Buffer.byteLength(postData)
    }
}
var req = http.request(options,function(res){
    console.log('STATUS: '+res.statusCode);
    console.log('HEADERS: '+JSON.stringify(res.headers));
    res.setEncoding('utf8');
    res.on('data', function(chunk){
        console.log('BODY: '+chunk);
    });
    res.on('end', function(){
        console.log('No more data in response.');
    });
})
req.write(postData);
req.end();