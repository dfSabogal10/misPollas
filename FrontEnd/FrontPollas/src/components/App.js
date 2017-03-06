import '../assets/stylesheets/base.scss';
import React, { Component } from 'react';
import { DateRange } from 'react-date-range';
import Games from './games';
import axios from 'axios';
import Fixture from './fixture';

var moment = require('moment');
var datestart = new moment('2014-11-11');
var dateend = new moment('2014-11-11');

const ROOT_URL = "https://mispollas.herokuapp.com/games?";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      fixtures:[],
      homeTeamName: '',
      awayTeamName: 'mierda',
      date: '',
      matchday  :   '',
      status: ''};
}


onChange(state) {
    this.setState(state);
  }
     getGames() {
var diasdiferencia =dateend.diff(datestart, 'days');
console.log(diasdiferencia);

var month= datestart.format('MM');
var day =datestart.format('DD');
var year =datestart.format('YYYY');
var month2= dateend.format('MM');
var day2= dateend.format('DD');
var year2 =dateend.format('YYYY');
console.log('day='+day+'&month='+month+'&year='+year+'&day2='+day2+'&month2='+month2+'&year2='+year2);
if(diasdiferencia> 20)
{
  alert("El maximo rango de fechas permitido es de 21 dias");
}
else {
  console.log("Query time");
                           // "2014-09-08T08:02:17-05:00" (ISO 8601)

  axios.get(ROOT_URL+ 'day='+day+'&month='+month+'&year='+year+'&day2='+day2+'&month2='+month2+'&year2='+year2)
       .then(response => {
         console.log("Busco");
this.setState({ fixtures: (response.data) });
           })
           .catch(function (error) {
   console.log(error);
});

//this.props.children.Games.getGames();

}


      }



      handleSelect(date){

                     datestart = new moment(date.startDate);
        dateend = new moment(date.endDate);
  }


  render() {
    return(
      <div>

      <h1>Mis Pollas</h1>
      <DateRange
                        onInit={this.handleSelect}
                        onChange={this.handleSelect}
                    />
                    <   button onClick={this.getGames.bind(this)}>Ver Partidos</button>








                    <div>

                    {this.state.fixtures.map(fixture => {
                       return <Fixture fixture={fixture} />
                     })}
      </div>





                    </div>




    )
  };
}




export default App;
