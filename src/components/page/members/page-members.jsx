//node_modules
import React from 'react';

//styles
import "../page-commons.css"
import "./page-members.css"

//etc..
import { importAllImages } from "components/import-images";

let numTele = "055-772-";
let arrNumTele = ["1380", "1314"];

let arrProfNames = ["박재흥", "김상복", "배종민", "김용기", "강현석", "남영호", "서영건", "김민기", "이수원"];
let arrProfPos = ["교수", "교수", "교수", "교수", "교수", "교수", "교수", "교수", "교수"]
let arrProfLabs = ["403호", "411호", "402호", "302호", "307호", "303호", "417호", "413호", "414호"]
let arrProfFeilds = ["S/W Engineering", "Network Communication & Secure", "Programming Language", "AI", "DataBase", "OS, Parallel Computing", "Network & Multimedia", "Computer Vision", "Image Processing, AR, Human-Computer Interaction"]

let objListProfImages = importAllImages(require.context('../../../images/professor',false, /\.(png|jpe?g)$/));

let arrAssiNames = ["박유리", "이가현", "신승철"];

let objListAssiImages = importAllImages(require.context('../../../images/assistant',false, /\.(png|jpe?g)$/));

let listProf = (imgProf) => {
    let listItemProf = [];
    
    for(let idx in imgProf){
        listItemProf.push(
            <li key={`${idx}`} className="members-list-item prof-list-item">
                <div className="member-containers professor">
                    <img src={`${imgProf[idx]}`} alt="교수님" id={`prof${idx}`} className="members-img"/>
                    <ul className="item-contents">
                        <li>성    함 : {arrProfNames[idx]}</li>
                        <li>직    위 : {arrProfPos[idx]}</li>
                        <li>연 구 실 : {arrProfLabs[idx]}</li>
                        <li>전    공 : {arrProfFeilds[idx]}</li>
                        <li></li>
                    </ul>
                </div>
            </li>
        )
    }

    return listItemProf;
}

let listAssi = (imgAssi) => {
    let listItemAssi =[];

    for(let idx in imgAssi){
        listItemAssi.push(
            <li key={`${idx}`} className="members-list-item assi-list-item">
                <div className="member-containers assistant">
                    <img src={`${imgAssi[idx]}`} alt="조교님" id={`assi${idx}`} className="members-img"/>
                    <ul className="item-contents">
                        <li>성    함 : {arrAssiNames[idx]}</li>
                    </ul>
                </div>
            </li>
        )
    }

    return listItemAssi;
}

const Members = () => {
    console.log(typeof objListProfImages);
    console.log(objListProfImages);
    return (
        <div className="page-commons-container dept-members-container">
            <div id="dept-professor" className="dept-contents dept-introduce">
                <h2>교수진 소개</h2>
                <div className="dept-description members-description">
                    <ul className="members-list prof-list">
                        {listProf(objListProfImages)}
                    </ul>
                </div>
            </div>
            <div id="dept-assistant" className="dept-members-contents dept-history">
                <h2>조교진 소개</h2>

                <div className="dept-description members-description">
                    <ul className="members-list assi-list">
                        {listAssi(objListAssiImages)}
                    </ul>
                </div>
            </div>
        </div>
    );
}
 
export default Members;