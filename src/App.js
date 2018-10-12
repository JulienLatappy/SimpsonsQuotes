import React, { Component } from 'react';
import './App.css';

import GenerateEmployee from './GeneEmployee';
import DisplayEmployee from './DisplayEmployee';
   



const Simpsons = [
  {
   quote: "Shoplifting is a victimless crime, like punching someone in the dark.",
   character: "Nelson Muntz",
   image : "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185",
   characterDirection : "Left"
  }
]
          






class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote:  Simpsons
    };
  }
  


  getQuote()  {
   fetch("https://thesimpsonsquoteapi.glitch.me/quotes")
      .then(response  =>  response.json())
      .then(data  => {
        this.setState({
          quote:  data[0],
        });
    }); 
  }
  
  render() {
    return (
      <div className="centrer">
        <GenerateEmployee  selectEmployee={() => this.getQuote()}  />
        <DisplayEmployee  quote={this.state.quote}  />
        
      </div>
    );
  }
}

export default App;
