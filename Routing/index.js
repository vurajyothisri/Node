const url=require('url');
const http=require('http');
const { path } = require('express/lib/application');


 const server=http.createServer((req,res)=>{
    const pathName=req.url
   if (pathName==='/'|| pathName==='/overview'){
    res.end("overview")
   }
   else if(pathName==='/product'){
    res.end("product")
   }
   else{
      res.writeHead(404,{
         'content-type':'text/html',
          'my-own-header':'jyothi'
      })
    res.end("<h1>server not found </h1>")
   }
 })

 server.listen(8000,'127.0.0.1',()=>{
    console.log('Listening to requesting')
 })