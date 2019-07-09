//node_modules
import React                from 'react';
import { FontAwesomeIcon }  from '@fortawesome/react-fontawesome';
//styles
import "./contents-gallery.css"

const Gallery = () => {
    return (
        <div className="contents-containers" id="m5">
            <h2>갤러리</h2>
            <div className="read-more-arrow">
                <FontAwesomeIcon icon="chevron-down" className="fa-4x"/>
            </div>
        </div>
    );
}
 
export default Gallery;