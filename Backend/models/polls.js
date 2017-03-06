var request = require('request');
exports.Polla = Polla;



var Polla = function (name) {
};


exports.list = (req, res) => {


var day = req.query.day
var month = req.query.month
var year = req.query.year

var day2 = req.query.day2
var month2 = req.query.month2
var year2 = req.query.year2

//console.log(day);




var retorno =   getGames(day,month,year,day2,month2,year2,
function(response){
var myObject = JSON.parse(response);
var jsonRetorno = [];

for (var i = 0; i < myObject.fixtures.length; i++) {
  jsonRetorno.push({homeTeamName: myObject.fixtures[i].homeTeamName, awayTeamName: myObject.fixtures[i].awayTeamName,date:myObject.fixtures[i].date,matchday: myObject.fixtures[i].matchday ,status:myObject.fixtures[i].status});

}
res.contentType('application/json');
res.send(JSON.stringify(jsonRetorno));
})
}


function getGames(day,month,year,day2,month2,year2,callback) {
//  request('http://api.football-data.org/v1/competitions/440/fixtures?timeFrameStart=2017-03-05&timeFrameEnd=2017-03-20', function (error, response, body) {
 request('http://api.football-data.org/v1/competitions/440/fixtures?timeFrameStart='+year+'-'+month+'-'+day+'&timeFrameEnd='+year2+'-'+month2+'-'+day2, function (error, response, body) {

    if (!error && response.statusCode == 200) {
      return    callback(body);
     }
})
}
