import React, { Component } from 'react';
import './App.css';
import { jsonResponse } from './fakedata.js';
import NumberList from './components/NumberList.js';
import Overlay from './components/Overlay.js';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			show: false
		}
	}
	
	showOverlayHandler = () => {
	    this.setState({
	      show: true
	    })
	}

	hideOverlayHandler = () =>  {
	    this.setState({
	      show: false
	    })
	}

    render() {
    return (
      <div className="App" >
        <header className="App-header">
          <h1 className="App-title">{jsonResponse.name}</h1>
        </header>
        <div>
        	<NumberList 
        		groups={jsonResponse.groups} 
        		clicked={this.showOverlayHandler} 
        		show={this.state.show} />
        </div>
        <Overlay show={this.state.show} clicked={this.hideOverlayHandler} />
      </div>
    );
  }
}

export default App;


 
