var http = require("http");
var url=require('url');

function start(route,handle){
  var server=http.createServer(function(req,res){
    var pathname=url.parse(req.url).pathname;
    console.log('Request for '+pathname+' received');
    route(handle,pathname,res,req);

  })
  server.listen(3000);
  console.log("server started on 3000");
}

exports.start=start;