var fs = require('fs'),
    path = require('path'),
    stream = require('stream');
function Blog(){
    var _public = __dirname+'/hexo-blog/public',
        _blog = __dirname+'/Blog';
    fs.exists(_public, function (exists) {
        if(!exists){
            console.log('==========public文件没有生成===========');
            return false;
        }
        fs.exists(_blog, function (exists) {
            if(exists){

            }
        });
    });
}
fs.rename(__dirname+'/hexo-blog/public',__dirname+'/Blog',function(err){
    if(err)
        throw err;
    console.log('移动重命名成功');
})
// Blog();