import React, { Component } from 'react';


type AppState = {
  moduleAResult: any;
  error: Error | null;
};

class App extends Component {


  handleClick = () => {
    import('./moduleA')
    .then(( m ) => {
      console.log(m);
    })
    .catch((err) => {
      console.log(err);
    });
      
  };

  render() {

    return (
      <div>
        <button onClick={this.handleClick}>Load</button>
      </div>
    );
  }
}

export default App;




