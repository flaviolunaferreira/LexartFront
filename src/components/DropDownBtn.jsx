import React from 'react';
import './Components.css';
const DropDownBtn = (listOption, name) => {

  return (
    <div className="dropBtn">
      <select name={name} id={name}>
        {listOption.map(item => (
          <option value={item}>{item}</option>
        ))};
      </select>
    </div>
  );
}

export default DropDownBtn;

