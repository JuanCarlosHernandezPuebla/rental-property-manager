const path = require('path');
let express = require('express');
let session = require('express-session');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
let MongoStore = require('connect-mongo')(session);

mongoose.connect('mongodb://localhost:27017/local', {
  useCreateIndex: true,
  useNewUrlParser: true,
  useFindAndModify: false
});

let db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection Error:'));

db.once('open', function () {
  console.log('Db connected');
});

let app = express();

app.use(bodyParser.json({type: 'application/json'}));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
  secret: 'wslifs ufhhmrs',
  resave: true,
  saveUninitialized: false,
  store: new MongoStore({
    mongooseConnection: db
  })
}));

app.use(express.static(path.resolve(__dirname, '../../public')));

let routes = require('../../routes/router');

app.use('/', routes);

app.get('*', (req,res) =>{
  res.sendFile(path.resolve(__dirname, '../../public/index.html'));
});

app.use(function(err, req, res, next) {
  res.status(err.status || 500).json(
    {
      'error': {
        message: err.message,
        error: {}
      }
    });
});

app.use(function(req, res, next) {
  console.log('Not found');
  let err = new Error('File Not Found');
  err.status = 404;
  next(err);
});

app.listen(3000, function () {
  console.log('Express app listening on port 3000');
});