import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ buy, handleDeleteFromDom }) {

  const handleDelete = (stock) => {
    fetch(`http://localhost:3001/stocks/${stock.id}`, {
      method: "DELETE",
    })
    .then(r => r.json())
    .then(handleDeleteFromDom(stock.id))
  };

  return (
    <div>
      <h2>My Portfolio</h2>
      {
       buy.map((stock) => <Stock key = {stock.id} stock={stock} onClick={handleDelete}/> ) 
      }
    </div>
  );
}

export default PortfolioContainer;
