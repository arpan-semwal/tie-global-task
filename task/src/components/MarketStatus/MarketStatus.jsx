import "./MarketStatus.css";
import DataShow from "../DataShow/DataShow";
const MarketStatus = () => {
  return (
    <div className="right">
      <div className="market">
        <p>Market Status</p>
        <div className="status">
          <button>CAPITAL MARKET</button>
          <button>CURRENCY</button>
          <button>COMMODITY</button>
          <button>DEBT</button>
          <button>CURRENCYFUTURE</button>
        </div>

         <div className="gain">
          <p>Top Gainers and Losers</p>
         </div>

         <div className="market-button">
          <button className="btn3">Gainers</button>
          <button className="btn4">Losers</button>
         </div>

         <div>
          <DataShow/>
         </div>

        
      </div>
    </div>
  )
}

export default MarketStatus