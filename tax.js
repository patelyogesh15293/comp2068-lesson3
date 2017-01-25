/**
 * Created by yopat on 2017-01-25.
 */
// dependencies

let http = require('http');
let url = require('url');
let accounting = require('accounting');

http.createServer(function(request, response) {
    let qs = url.parse(request.url, true).query;
    let amount = qs.amount;

    // calculate tax and total
    let hst = parseFloat(amount) * .13;
    let total = parseFloat(amount) + parseFloat(hst);

    //display all value
    response.write('Amount: ' + accounting.formatMoney(amount) + '\n');
    response.write('HST: ' + accounting.formatMoney(hst) + '\n');
    response.write('Total: ' + accounting.formatMoney(total) + '\n');
    response.end();

}).listen(3000);

console.log('Tax server running');