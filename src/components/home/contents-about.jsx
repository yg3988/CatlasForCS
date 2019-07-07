//node_modules
import React                from 'react';
import { Link }             from 'react-router-dom';

//styles
import './contents-about.css'

const About = () => {
    return (
        <div className="contents-containers contents-about" id="m0">
            <h2>국립 경상대학교 컴퓨터과학과에 대해서 알고 싶나요?</h2>
            <p className="pram lorem-pram-dark">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum eveniet hic saepe, voluptatem corporis, eum dicta reprehenderit similique officiis explicabo itaque, commodi quod incidunt alias assumenda ad odit cupiditate exercitationem.</p>
            <Link to="/about"><button className="btn btn-primary btn-more">Read more..</button></Link>
        </div>
    );
}
 
export default About;