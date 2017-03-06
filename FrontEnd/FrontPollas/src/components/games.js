import React, {Component} from 'react';
import axios from 'axios';
const ROOT_URL = "https://mispollas.herokuapp.com/games?";
import Fixture from './fixture';
var papitas = false;
class Games extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };
  }
getGames()
{
  console.log("xx");

  papitas=true;
  componentDidMount();
}
  componentDidMount() {
    console.log("BUSCOOOOOOOOOOOOOO");

    if(papitas){
    axios.get(`http://www.reddit.com/r/reactjs.json`)
      .then(res => {
        const posts = res.data.data.children.map(obj => obj.data);
        this.setState({ posts });
      });
    }
  }

  render() {
    return (
      <div>
        <h1>{`/r/${this.props.subreddit}`}</h1>
        <ul>
          {this.state.posts.map(post =>
            <li key={post.id}>{post.title}</li>
          )}
        </ul>
      </div>
    );
  }
}

export default Games;
