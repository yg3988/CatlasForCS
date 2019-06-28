//node_modules
import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
//icons
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

//Store
import Store from "./store/store";
//Containers
import { Header, Home } from 'containers';

library.add(faBars, faTimes);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Catlas"
    }
  }
  render() { 
    return (
      <Store.Provider value={this.state} className="App">
        <Header/>
        <BrowserRouter>          
          <Route exact path="/" component={Home}/>
        </BrowserRouter>
      </Store.Provider>
    );
  }
}
 
export default App;
