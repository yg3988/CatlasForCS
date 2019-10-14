//import modules
import React, { Component }   from 'react';

//components
import NoticeSubMenu          from "components/page/notice/page-notice-submenu";
import UnivNotice             from "components/page/notice/page-notice-univ";
import EduNotice              from "components/page/notice/page-notice-edu";

//store
import store                  from "store/store"

const NoticeBoard = (flag) => {
  if(flag === 1){
    return <UnivNotice/>
  } else if (flag === 2){
    return <EduNotice/>
  }
}

class PageNotice extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (
      <div className="page-container">
        <NoticeSubMenu/>
        <store.Consumer>
          {store=>(NoticeBoard(store.flagNotice))}
        </store.Consumer>
      </div>
    );
  }
}
 
export default PageNotice;