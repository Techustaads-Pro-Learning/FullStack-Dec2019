var db = require('../core/db')

exports.getProduct = function (req, resp) {
    db.executeSql("SELECT * from products", function (data) {
        resp.writeHead(200, { 'Content-Type': 'application/json' }); // 'Content-Type': 'application/json'
        //console.log(data);

        resp.write(JSON.stringify(data));
        resp.end();
    })
    
}