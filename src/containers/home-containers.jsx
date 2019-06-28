//node_modules
import React, { Component } from 'react';

//components
import {
    MainPage,
    ImageSlide
} from 'components/home';

//style sheet
import "./home-containers.css";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    
    componentDidMount(){
        let jumboIndex = 0;
        imageSliderInit();
        // timeoutSlideEvent();

        function imageSliderInit(){
            let slider = document.getElementById("slider");
            let images = document.getElementById("jumbo-image");
            let arrSliderImages = document.getElementsByClassName("jumbo-images");
            
            slider.style.width = `calc(100% * ${arrSliderImages.length})`;
            images.style.width = `calc(100% / ${arrSliderImages.length})`;
        }
        // function timeoutSlideEvent(){
        //     console.log("start");
        //     let arrJumbo = document.getElementsByClassName("jumbo-images");
        //     console.log(arrJumbo);
        //     for (let i = 0; i < arrJumbo.length; i++){
        //         arrJumbo[i].style.display = "none";
        //     }
        //     jumboIndex++;
        //     if (jumboIndex > arrJumbo.length) {jumboIndex = 1}
        //     arrJumbo[jumboIndex-1].style.display = "block";
        //     setTimeout(slideEvent, 2500);
        // }

    }
    
    render() { 
        return ( 
            <div className="containers">
                <div className="jumbo-image">
                    <ImageSlide/>
                </div>
                <div className="main-contents">
                    <MainPage/>
                </div>
            </div>
        );
    }
}
 
export default Home;