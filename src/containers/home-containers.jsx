//node_modules
import React, { Component } from "react";

//components
import {
	ImageSlide,
	About,
	Members,
	Curriculum,
	Notice,
	Board,
	Gallery
} from "components/home";

//style sheet
import "./home-containers.css";

let jumboIndex = 0;
let isHome = true;

const timeoutSlideEvent = () => {
	let arrJumboImages = document.getElementsByClassName("slide-image-box");
	let circleNavBtn = document.getElementsByClassName("circle-nav-btn");
	let len = arrJumboImages.length;

	for (let i = 0; i < len; i++) {
		arrJumboImages[i].style.display = "none";
		circleNavBtn[i].style.backgroundColor = "rgba(0,0,0,0)";
	}

	jumboIndex++;

	if (jumboIndex > len) {
		jumboIndex = 1;
	}

	if (isHome) {
		circleNavBtn[jumboIndex - 1].style.backgroundColor = "#fff";
		arrJumboImages[jumboIndex - 1].style.display = "block";
		setTimeout(timeoutSlideEvent, 2500);
	}
};

const slideEvent = idx => {
	let arrJumboImages = document.getElementsByClassName("slide-image-box");
	let circleNavBtn = document.getElementsByClassName("circle-nav-btn");
	let len = arrJumboImages.length;

	for (let i = 0; i < len; i++) {
		arrJumboImages[i].style.display = "none";
		circleNavBtn[i].style.backgroundColor = "rgba(0,0,0,0)";
	}
	jumboIndex = idx;
	circleNavBtn[idx].style.backgroundColor = "#fff";
	arrJumboImages[idx].style.display = "block";
};

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidMount() {
		isHome = true;
		timeoutSlideEvent();
	}

	componentWillUnmount() {
		isHome = false;
	}

	render() {
		return (
			<div className="home-containers">
				<div className="jumbo-slider">
					<ImageSlide handleClickEvent={slideEvent} />
				</div>
				<div className="main-contents">
					<div id="section0" className="section">
						<About />
					</div>
					<div id="section1" className="section">
						<Members />
					</div>
					<div id="section2" className="section">
						<Curriculum />
					</div>
					<div id="section3" className="section">
						<Notice />
					</div>
					<div id="section4" className="section">
						<Board />
					</div>
					<div id="section5" className="section">
						<Gallery />
					</div>
				</div>
			</div>
		);
	}
}

export default Home;
