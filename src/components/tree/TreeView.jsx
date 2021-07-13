/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import './index.css';

export default function TreeView() {
  const [isActive, setIsActive] = useState(false);
  return (
    <div>
      <ul id="myUL">
        <li>
          <span
            className={` ${isActive ? 'caret caret-down' : 'caret'}`}
            onClick={() => setIsActive(!isActive)}
          >
            Beverages
          </span>
          <ul className={`${isActive ? 'nested active' : 'nested'}`}>
            <li>Water</li>
            <li>Coffee</li>
            <li>
              <span className="caret">Tea</span>
              <ul className="nested">
                <li>Black Tea</li>
                <li>White Tea</li>
                <li>
                  <span className="caret">Green Tea</span>
                  <ul className="nested">
                    <li>Sencha</li>
                    <li>Gyokuro</li>
                    <li>Matcha</li>
                    <li>Pi Lo Chun</li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

// {
/* <script>
var toggler = document.getElementsByClassName("caret");
var i;

for (i = 0; i < toggler.length; i++) {
  toggler[i].addEventListener("click", function() {
    this.parentElement.querySelector(".nested").classList.toggle("active");
    this.classList.toggle("caret-down");
  });
}
</script> */
// }
