//node_modules
import React                from 'react';
import { FontAwesomeIcon }  from '@fortawesome/react-fontawesome';
//styles
import "./contents-gallery.css"

const Gallery = () => {
    return (
        <div className="contents-containers" id="m5">
            <h2>갤러리</h2>
            <FontAwesomeIcon icon="chevron-down" className="fa-4x">더보기</FontAwesomeIcon>
        </div>
    );
}
 
export default Gallery;