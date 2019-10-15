//node_modules
import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { FontAwesomeIcons } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
//icons
import { faBars, faTimes, faBinoculars, faBook, faCalendarAlt, faHandHoldingHeart, faChevronDown } from '@fortawesome/free-solid-svg-icons';

//Store
import Store from "./store/store";

//styles
import 'App.css'
//Containers
import { 
  Header, 
  Home,
  SignIn,
  Footer,
  About,
  Members,
  Curriculum,
  CurriculumGoal,
  Notice
} from 'containers';

library.add(faBars, faTimes, faBinoculars, faBook, faCalendarAlt, faHandHoldingHeart, faChevronDown);

class App extends Component {
  constructor(props) {
    super(props);
    this._handleNecessaryFlag = () => {
      this.setState({
        isMajorNecessary: true
      });
    }
    this._handleSelectionFlag = () => {
      this.setState({
        isMajorNecessary: false
      });
    }
    this._handleUnivNoticeFlag = () => {
      this.setState({
        flagNotice: 1
      });
    }
    this._handleEduNoticeFlag = () => {
      this.setState({
        flagNotice: 2
      })
    }
    this.state = {
      title: "Catlas",
      isMajorNecessary: true,
      flagNotice: 1,
      handleNecessaryFlag: this._handleNecessaryFlag,
      handleSelectionFlag: this._handleSelectionFlag,
      handleUnivNoticeFlag: this._handleUnivNoticeFlag,
      handleEduNoticeFlag: this._handleEduNoticeFlag
    }
  }
  render() { 
    return (
      <Store.Provider value={this.state} className="App">
        <BrowserRouter>
          <Header/>
          <Route exact path="/"               component={Home}/>
          <Route exact path="/login"          component={SignIn}/>
          <Route exact path="/about"          component={About}/>
          <Route exact path="/members"        component={Members}/>
          <Route exact path="/curriculum"     component={Curriculum}/>
          <Route exact path="/education-goal" component={CurriculumGoal}/>
          <Route exact path="/notice"         component={Notice}/>
        </BrowserRouter>
        <Footer/>
      </Store.Provider>
    );
  }
}
 
export default App;
