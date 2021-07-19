import React from 'react';
import './Components.css';

const cards = (product) => {
  return (
    <div className="waper">
      {product.map((item) => (
        <div class="centro">
          <div class="card">
            <div class="imgBox">
              <img src={item.photo} alt="" />
              <h2>{item.category}</h2><br></br>
            </div>
            <div class="textBox">
              <p>{item.title}</p>
              <div className="btns">
                <a href={item.site} target="_blanck">Ver Página</a>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="waper-2"></div>
    </div>
  );
}

export default cards;

