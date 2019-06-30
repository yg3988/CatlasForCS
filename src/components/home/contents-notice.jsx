//node_modules
import React from 'react';

//styles
import './contents-notice.css'

const Notice = () => {
    return (
        <div className="contents-containers contents-notice" id="m3">
            <h2>중요한 공지사항을 알려드립니다.</h2>
            <button className="btn btn-primary">공지 보기</button>
        </div>
    );
}
 
export default Notice;