import React from 'react';
import ReactDOM from 'react-dom';

import css from './style.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        Hello
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));