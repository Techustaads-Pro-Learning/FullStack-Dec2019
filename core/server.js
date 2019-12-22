//var http = required('http');
var http = require('http');
var setting = require('../settings');
var product = require('../controllers/products')


const proxy = http.createServer((req, resp) => {
    //res.writeHead(200, { 'Content-Type': 'text/html' });
    //console.log(req.url);
    //console.log(req.method);
    //res.write('<html><head></head><body></body></html>');
    /*
    if(req.url === '/welcome') {
        res.write('Welcome');
   
    }else {
        res.write('Hellow world');
   
    }
    */

    switch(req.method) {
        case  "GET" :
            if(req.url === '/') {
                resp.writeHead(200, { 'Content-Type': 'text/html' });
                resp.write('<html><head></head><body>Welcome</body></html>');
            }else if(req.url === '/getProductList'){
                product.getProduct(req, resp);
            }else {

            }
            break;
        case  "POST" :
            break;
        case  "PUT" :
            break;
        case  "DELETE" :
            break;
        default:
            res.writeHead(405, { 'Content-Type': 'text/html' });
            break;
    }

    // 
   
  }).listen(setting.webPort,function(){
      console.log(`server started on port no ${setting.webPort}`)
  });