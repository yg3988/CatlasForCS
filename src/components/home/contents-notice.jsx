//node_modules
import React                from 'react';
import { Link }             from 'react-router-dom';

//styles
import './contents-notice.css'

const Notice = () => {
    return (
        <div className="contents-containers contents-notice" id="m3">
            <h2>중요한 공지사항을 확인하세요.</h2>
            <Link to="/notice">
                <button className="btn btn-primary btn-more">공지 보기</button>
            </Link>
        </div>
    );
}
 
export default Notice;