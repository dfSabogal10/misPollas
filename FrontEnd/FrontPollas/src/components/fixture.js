import React, {Component} from 'react';

class Fixture extends Component {

  render(){
    return (

      <table className="fixes">
      <thead>
       <tr>
           <th>Local</th>
           <th>Visitante</th>
           <th>Fecha</th>
           <th>Jornada</th>
           <th>Status</th>
       </tr>
   </thead>
   <tbody>
       <tr>
           <td>{this.props.fixture.homeTeamName}</td>
           <td>{this.props.fixture.awayTeamName}</td>
           <td>{this.props.fixture.date}</td>
           <td>{this.props.fixture.matchday}</td>
           <td>{this.props.fixture.status}</td>
       </tr>

   </tbody>

</table>




    );
  }
}

export default Fixture;
