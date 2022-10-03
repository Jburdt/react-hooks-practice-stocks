import React from "react";

function Stock({ stock, onClick }) {

  const handlClick = () => {
    onClick(stock)
  };

  return (
    <div>
      <div onClick={handlClick} className="card">
        <div className="card-body">
          <h5 className="card-title">{stock.name}</h5>
          <p className="card-text">{stock.price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
