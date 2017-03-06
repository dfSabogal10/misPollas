var express = require('express');
var router = express.Router();
var cors = require('cors');
var app = express();
app.use(cors());

const routes = require('./routes/index');
routes(app);

app.set('port', (process.env.PORT || 6969));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
