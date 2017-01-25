/**
 * Created by yopat on 2017-01-25.
 */
// link to the connect  package

let connect = require('connect');

//create a new instance
let app = connect();

// hello function
let hello = function(req, res, next){
  res.end('hello');
};
// goodbye
let goodbye = function(req, res, next){
    res.end('Goodbye');
};

let index = function(req, res, next){
    res.end('Home / Index Page');
};

let tax = function(req, res, next){
    res.send('tax.js');
};
// route the urls the connect function
app.use('/hello', hello);
app.use('/goodbye', goodbye);
app.use('/tax', tax);
app.use('/', index);
//start the server
app.listen(3000);

console.log('server running on port 3000');
