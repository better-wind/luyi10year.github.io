var http = require('http'),
    url = require('url'),
    path = require('path'),
    fs = require('fs');
var mimetype = {
    'txt': 'text/plain',
    'html': 'text/html',
    'css': 'text/css',
    'xml': 'application/xml',
    'json': 'application/json',
    'js': 'application/javascript',
    'jpg': 'image/jpeg',
    'jpeg': 'image/jpeg',
    'gif': 'image/gif',
    'png': 'image/png',
    'svg': 'image/svg+xml'
}
function page_404(req,res,path){
    res.writeHead(404,{
        'Content-Type':'text/html'
    })
    res.write('<!doctype html>\n');
    res.write('<title>404 Not Found</title>\n');
    res.write('<h1>Not Found</h1>');
    res.write(
        '<p>The requested URL ' +
        path +
        ' was not found on this server.</p>'
    );
    res.end();
}
http.createServer(function(req,res){
    // console.log(url.parse(req.url));
    // console.log(req.url);
    var pathname = url.parse(req.url).pathname,
        realPath = path.join(__dirname,'/static',pathname);
    var body = [];
    req.on('data',function(data){
        console.log(data);
        body.push(data);
    })
    req.on('end',function(){
        body = Buffer.concat(body);
        console.log(body.toString());
    })
    fs.exists(realPath,function(ex){
        if(ex){
            var rs = fs.createReadStream(realPath);
            res.writeHead(200,{
                'Content-Type':mimetype[realPath.split('.').pop()] || 'text/plain'
            })
            rs.on('data',res.write.bind(res))
            rs.on('close',res.end.bind(res));
        }
        else{
            page_404(req,res,realPath);
        }
    })
}).listen(3000,'123.57.160.125')
