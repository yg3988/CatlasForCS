//node_modules
import React                from 'react';
import { Link }             from 'react-router-dom';
//styles
import "./contents-navbar.css"

const arrMenuItems = ["학과소개", "구성원", "교과", "소식", "게시판", "갤러리"]

const navList = arrMenuItems.map(
    (item, index) => {
        return (
            <li key={index} className="menu-items">
                <a href={`#section${index}`} className="lnk">
                    {item}
                </a>
            </li>
        )
    }
)

let idx = 0;

window.addEventListener('scroll', function(){
    let target = this.document.querySelector(".nav-title");
    if(target){
      if(idx+1 > document.getElementsByClassName("slide-image-box").length) idx = 0;
      let imgId = "i" + idx++;
      let imgHeight = this.document.getElementById(imgId).offsetHeight;
      if(imgHeight){
        let scrollPosition = window.scrollY;
        if(scrollPosition >= imgHeight) target.classList.add('show');
        else target.classList.remove('show');
      }
    }
})

const ContentsNavBar = () => {
    return (
        <div className="navbar-container">
            <p className="nav-title" name="nav-title">
                <Link to="/" className="lnk nav-lnk-title">Catlas</Link>
            </p>
            <ul>
                {navList}
            </ul>
        </div>
    );
}
 
export default ContentsNavBar;