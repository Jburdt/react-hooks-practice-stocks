import React, { useEffect, useState } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {

  const [stocks, setStocks] = useState([]);
  const [buy, setBuy] = useState([]);
  const [sortBy, setSortBy] = useState('');
  const [selected, setSelected] = useState('Tech');

  //Filters 
  const sorted = stocks.sort((a, b) => { 
    if(sortBy === "Alphabetically" ) {
      return a.ticker.localeCompare(b.ticker)} 
      else {
        return a.price - b.price
      } 
    })
    
  // Setup for the drop down select
  const setSelectedType = sorted.filter((item) => item.type === selected)

  //Deletes from DOM
  const handleDeleteFromDom = (id) => {
    const selectedStock = buy.filter((buyObj) => buyObj.id !== id)
    setBuy(selectedStock)
  };

  const purchase = (stock) => {
    setBuy([...buy, stock])
  };

  useEffect(() => {
    fetch('http://localhost:3001/stocks')
    .then(r => r.json())
    .then(data => setStocks(data))
  }, []);

  return (
    <div>
      <SearchBar setSelected={setSelected} selected={selected} setSortBy={setSortBy} sortBy={sortBy}  />
      <div className="row">
        <div className="col-8">
          <StockContainer purchase={purchase} buy={buy} setBuy={setBuy} stocks={setSelectedType} setStocks={setStocks} />
        </div>
        <div className="col-4">
          <PortfolioContainer  buy={buy} stocks={setSelectedType} setStocks={setStocks}handleDeleteFromDom={handleDeleteFromDom} />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
