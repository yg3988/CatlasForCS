//node_modules
import React, { Component } from 'react';

//components
import {
  ImageSlide,
  ContentsNavBar,
  About,
  Members,
  Curriculum,
  Notice,
  Board
} from 'components/home';

//style sheet
import "./home-containers.css";

let jumboIndex = 0;

const timeoutSlideEvent = () =>{
  let arrJumboImages = document.getElementsByClassName("jumbo-images");
  let circleNavBtn = document.getElementsByClassName("circle-nav-btn");
  let len = arrJumboImages.length;

  for (let i = 0; i < len; i++){
    arrJumboImages[i].style.display = "none";
    circleNavBtn[i].style.backgroundColor="rgba(0,0,0,0)";
  }
  
  jumboIndex++;

  if (jumboIndex > len) {jumboIndex = 1}

  circleNavBtn[jumboIndex-1].style.backgroundColor="#fff";
  arrJumboImages[jumboIndex-1].style.display = "block";

  setTimeout(timeoutSlideEvent, 2500);
}

const slideEvent = (idx) => {
  let arrJumboImages = document.getElementsByClassName("jumbo-images");
  let circleNavBtn = document.getElementsByClassName("circle-nav-btn");
  let len = arrJumboImages.length;

  for(let i = 0; i < len; i++){
    arrJumboImages[i].style.display = "none";
    circleNavBtn[i].style.backgroundColor="rgba(0,0,0,0)";
  }
  jumboIndex = idx;
  circleNavBtn[idx].style.backgroundColor="#fff";
  arrJumboImages[idx].style.display="block"
}

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
    
  componentDidMount(){
    timeoutSlideEvent();
  }
    
  render() { 
    return ( 
      <div className="containers">
        <div className="jumbo-slider">
          <ImageSlide
            handleClickEvent={slideEvent}
          />
          </div>
          <ContentsNavBar/>
          <div className="main-contents">
            <About/>
            <Members/>
            <Curriculum/>
            <Notice/>
            <Board/>
          </div>
        </div>
      );
  }
}
 
export default Home;