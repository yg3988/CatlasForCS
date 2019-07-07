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
                <a href={`#m${index}`} className="lnk">
                    {item}
                </a>
            </li>
        )
    }
)


window.addEventListener('scroll', function(){
    let scrollPosition = window.scrollY;
    let target = this.document.querySelector(".nav-title")
    if(window.innerWidth > 400) {
      if(scrollPosition >= 959) target.classList.add('show');
      else target.classList.remove('show');
    }else{
      if(scrollPosition >= 103) target.classList.add('show');
      else target.classList.remove('show');
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