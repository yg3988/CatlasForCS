//node_modules
import React from 'react';

//styles
import './imgslide.css';

const slideEvent = (idx) => {
    let arrJumboImages = document.getElementsByClassName("jumbo-images");
    let circleNavBtn = document.getElementsByClassName("circle-nav-btn");
    let len = arrJumboImages.length;
    console.log(idx);
    for(let i = 0; i < len; i++){
        circleNavBtn[i].style.backgroundColor="rgba(0,0,0,0)";
        if(i==idx){
            circleNavBtn[i].style.backgroundColor="#fff";
        }
    }
    arrJumboImages[0].style.marginLeft=`calc(((-100 / ${len}) * ${idx}) * 1%)`;
}

const importAllImages = (r) =>{
    let images = {};
    let idx = 0;
    
    r.keys().forEach(element=>{        
        images[element.replace(/(\.\/)\w+(\.)(png|jpe?g)/g,idx++)] = r(element)
    });
    return images;
}

const imagesRadioBtns = (images) => {
    let radios = [];
    
    for (let props in images){
        props == 0 ?
            radios.push(
                <input type="radio" key={props} id={`r${props}`} name="circle-nav-btn" className='radio-btn' onClick={(e) => slideEvent(props)} defaultChecked/>
            )
        :
            radios.push(
                <input type="radio" key={props} id={`r${props}`} name="circle-nav-btn" className='radio-btn' onClick={(e) => slideEvent(props)}/>
            )
    }
    return radios;
}

const showImages = (images) => {
    let array = []

    for (let props in images){
        array.push(
            <img key={props} src={images[props]} alt={props} id="jumbo-image" className={`slide jumbo-images s${props} slide-image-animation`}/>
        )
    }

    return array;
}

const imagesNavigation = (images) => {
    let labels = [];

    for (let props in images) {
        labels.push(
            <label key={props} htmlFor={`r${props}`} id={`dot${props}`} className={`circle-nav-btn`}/>
        )
    }
    return labels;
}

const ImageSlide = () => {
    const images = importAllImages(require.context('../../images',false, /\.(png|jpe?g)$/));

    return (
        <div className='slide-body'>
            {imagesRadioBtns(images)}
            <div id="slider" className="image-slide">
                {showImages(images)}
            </div>
            <div className="navigation">
                {imagesNavigation(images)}
            </div>
        </div>
    );
}
 
export default ImageSlide;