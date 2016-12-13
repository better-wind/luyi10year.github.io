var fs = require('fs'),
    path = require('path'),
    stream = require('stream');
fs.rename(__dirname+'/hexo-blog/public',__dirname+'/Blog',function(err){
    if(err)
        throw err;
    console.log('移动重命名成功');
})