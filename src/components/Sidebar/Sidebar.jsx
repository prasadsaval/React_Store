import React, { useState } from "react";

import "./Sidebar.css";

function Sidebar() {
  // State with list of all checked item
  const [checked, setChecked] = useState([]);
  const checkList1 = ["Red", "Blue", "Green"];
  const checkList2 = ["Men", "Women"];
  const checkList3 = ["0-250", "251-450", "450"];
  const checkList4 = ["polo", "hoodie", "basic"];

  // Add/Remove checked item from list
  const handleCheck = event => {
    var updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updatedList);
    console.log(updatedList)
  };

  // Generate string of checked items
  const checkedItems = checked.length
    ? checked.reduce((total, item) => {
        return total + ", " + item;
      })
    : "";

  var isChecked = item =>
    checked.includes(item) ? "checked-item" : "not-checked-item";

  return (
    <div className="app">
      <div className="checkList">
        <div className="title">Color:</div>
        <div className="list-container">
          {checkList1.map((item, index) => (
            <div key={index}>
              <input value={item} type="checkbox" onChange={handleCheck} />
              <span className={isChecked(item)}>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ============ */}
      <div className="checkList">
        <div className="title">Gender</div>
        <div className="list-container">
          {checkList2.map((item, index) => (
            <div key={index}>
              <input value={item} type="checkbox" onChange={handleCheck} />
              <span className={isChecked(item)}>{item}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="checkList">
        <div className="title">Price Range</div>
        <div className="list-container">
          {checkList3.map((item, index) => (
            <div key={index}>
              <input value={item} type="checkbox" onChange={handleCheck} />
              <span className={isChecked(item)}>{item}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="checkList">
        <div className="title">Types:</div>
        <div className="list-container">
          {checkList4.map((item, index) => (
            <div key={index}>
              <input value={item} type="checkbox" onChange={handleCheck} />
              <span className={isChecked(item)}>{item}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="button">
        <button onClick={ handleCheck}>Check</button>
      </div>
    </div>
  );
}
export default Sidebar;
