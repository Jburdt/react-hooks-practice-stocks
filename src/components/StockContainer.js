import React from "react";
import Stock from "./Stock";

function StockContainer({ stocks, setStocks, buy, setBuy, purchase }) {
  return (
    <div>
      <h2>Stocks</h2>
      { stocks.map((stock) => <Stock key={stock.id} stock={stock} setStocks={setStocks} buy={buy} setBuy={setBuy} onClick={purchase} />)}
    </div>
  );
}

export default StockContainer;
