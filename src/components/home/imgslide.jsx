//node_modules
import React from 'react';

//styles
import './imgslide.css';

const importAllImages = (r) =>{
    let images = {};
    let idx = 0;
    
    r.keys().forEach(element=>{        
        images[element.replace(/(\.\/)\w+(\.)(png|jpe?g)/g,idx++)] = r(element)
    });
    return images;
}

const imagesRadioBtns = (images, handleClickEvent) => {
    let radios = [];
    
    for (let props in images){
        props == 0 ?
            radios.push(
                <input type="radio" key={props} id={`r${props}`} name="circle-nav-btn" className='radio-btn' onClick={(e) => handleClickEvent(props)} defaultChecked/>
            )
        :
            radios.push(
                <input type="radio" key={props} id={`r${props}`} name="circle-nav-btn" className='radio-btn' onClick={(e) => handleClickEvent(props)}/>
            )
    }
    return radios;
}

const showImages = (images) => {
    let array = []

    for (let props in images){
        array.push(
            <div className="slide-image-box">
                <img key={props} src={images[props]} alt={props} id="jumbo-image" className={`jumbo-images s${props} slide-image-animation`}/>
                <div className="slide jumbo-image-about">
                    <div className="jumbo-image-about-contents">대충 내용이라는 글</div>
                </div>
            </div>
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

const ImageSlide = ({handleClickEvent}) => {
    const images = importAllImages(require.context('../../images',false, /\.(png|jpe?g)$/));
    console.log(handleClickEvent);
    return (
        <div className='slide-body'>
            {imagesRadioBtns(images, handleClickEvent)}
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