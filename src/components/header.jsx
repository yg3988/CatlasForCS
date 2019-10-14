//node_modules
import React                from 'react';
import { Link }             from 'react-router-dom';
import { FontAwesomeIcon }  from '@fortawesome/react-fontawesome';

//stylesheet
import "./header.css"

const arrMenuItems = ["학과소개", "구성원", "교과", "소식", "게시판", "갤러리"]

window.addEventListener('scroll', function(){
    let target = this.document.querySelector(".nav-menu");
    if(target){
      let img = this.document.getElementById("slider");
      if(img){
        let imgHeight = img.offsetHeight;
        let scrollPosition = window.scrollY;
        if(scrollPosition >= imgHeight) target.classList.add('shown');
        else target.classList.remove('shown');
      }else
        target.classList.add('shown');
    }
})

const navList = arrMenuItems.map(
    (item, index) => {
        return (
            <li key={index} className="nav-menu-items">
                <a href={`/#section${index}`} className="lnk">
                    {item}
                </a>
            </li>
        )
    }
)

const ComponentHeader = ({title}) => {
    return (
        <div className="header-container">
            <p className="header-title">
                <Link to="/" className="lnk header-lnk-title">{title}</Link>
            </p>
            <input type="checkbox" id="chk"/>
            <label htmlFor="chk" className="header-show-menu-btn">
                <FontAwesomeIcon icon="bars"/>
            </label>
            <ul className="header-menu">
                <ul className="nav-menu">
                    {navList}
                </ul>
                <Link to="/" className="lnk header-menu-items header-menu-items-unborder">Home</Link>
                <a href="#" className="lnk header-menu-items header-menu-items-unborder">About</a>
                <Link to="/login" className="lnk header-menu-items">
                    <span className="header-sign-in">Sign In</span>
                </Link>
                <label htmlFor="chk" className="header-hide-menu-btn">
                <FontAwesomeIcon icon="times"/></label>
            </ul>
        </div>
    );
}
 
export default ComponentHeader;