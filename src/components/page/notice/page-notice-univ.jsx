//node_modules
import React from 'react';

//styles
import "../page-commons.css"

let items = [1, "테스트", "2019-10-14", 0]
const ListTableItem = (item) => {
  return(
    <tr>
      <td>{item[0]}</td>
      <td>
        <div className="items-title">
          {item[1]}
        </div>
      </td>
      <td>
      <ul>
          <li>
            {item[2]}
          </li>
          <li>
            {item[3]}
          </li>
        </ul>
      </td>
    </tr>
  )
}

const UnivNotcie = () => {
  return (
    <div className="page-commons-container">
      <h1>공지 사항</h1>
      <div className="horizen-divider divider-margin-top-x4 divider-margin-bottom-x4"></div>
      <table>
        {ListTableItem(items)}
      </table>
    </div>
  );
}
 
export default UnivNotcie;
