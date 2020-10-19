var h = require('http');
  
  var server = h.createServer(function(req,res)
{ 

 if(req.url == '/' )
   {
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write("<h1> Welcome to Node </h1>");
        res.end( );	
   }

 if(req.url == '/product' )
   {
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write("<h1> Product </h1>");
        res.end( );	
   }
 if(req.url == '/info' )
   {
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write("<h1> Info </h1>");
        res.end( );	
   }	
	

} );

server.listen(8110);
console.log("Server started at port no 8110");
