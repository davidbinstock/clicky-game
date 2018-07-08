import React, { Component } from 'react';
import './App.css';

import Card from "./components/Card";
import CardContainer from "./components/CardContainer";
import characterList from "./characters.json";

// let characters = characterList;
// characters = shuffle(characters);



function shuffle (array) {
  let currentIndex = array.length;
  let temporaryValue;
  let randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}



class App extends Component {
  state = {
    characters: characterList,
    count: 0

  };

  reset () {
    const newCharacterList = shuffle(this.state.characters.map(char => {
      char.saved = false;
      return char
    }));
    this.setState({
      characters: newCharacterList,
      count: 0
    })
  }

  shuffleCharacters () {
    const newOrder = shuffle(this.state.characters);
    this.setState({
      characters: newOrder
    })
  }

  onClickEventHandler = (charId) => {
    console.log("click!");
    let updatedCount;
    // check if image was already clicked
    if(!this.state.characters.find(char => char.id === charId).saved){
      updatedCount = this.state.count + 1
    }else{
      this.reset()
      return
    }

    // mark image as saved
    const newList = this.state.characters.map(char => {
      if(char.id === charId){
        char.saved = true;
        return char
      }else{
        return char
      }
    });
    this.setState({
      characters: newList,
      count: updatedCount
    })
    this.shuffleCharacters();
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">The Clicky Game!!</h1>
          <h2>Count: {this.state.count}</h2>
        </header>
        <CardContainer>
          {this.state.characters.map(char => <Card image={char.image} name={char.name} clickHandler={this.onClickEventHandler} key={char.id} id={char.id} saved={char.saved}/> )}
        </CardContainer>
      </div>
    );
  }
}

export default App;
