import { useEffect, useState } from "react";
import axios from "axios";
import "./DataShow.css";

const DataShow = () => {
  const [niftyData, setNiftyData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDataApi = async () => {
      try {
        const PROXY_URL = "http://localhost:3002/nseData";
        const response = await axios.get(PROXY_URL);
        console.log("Response from proxy server:", response);
        setNiftyData(response.data.NIFTY.data);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDataApi();
  }, []);

  return (
    <div className="datashow">
      {loading && <p>Loading...</p>}

      <div>
        <table>
          <thead>
            <tr>
              <th>Symbol</th>
              <th>Series</th>
              <th>Open Price</th>
              <th>High Price</th>
              <th>Low Price</th>
              <th>Last Traded Price (LTP)</th>
              <th>Previous Price</th>
              <th>Net Price</th>
              <th>Trade Quantity</th>
              <th>Turnover</th>
              <th>Market Type</th>
              <th>CA Ex Date</th>
              <th>CA Purpose</th>
              <th>Percentage Change</th>
            </tr>
          </thead>


          <tbody>
            {niftyData?.map((stock, index) => (
              <tr key={index}>
                <td>{stock.symbol}</td>
                <td>{stock.series}</td>
                <td>{stock.open_price}</td>
                <td>{stock.high_price}</td>
                <td>{stock.low_price}</td>
                <td>{stock.ltp}</td>
                <td>{stock.prev_price}</td>
                <td>{stock.net_price}</td>
                <td>{stock.trade_quantity}</td>
                <td>{stock.turnover}</td>
                <td>{stock.market_type}</td>
                <td>{stock.ca_ex_dt}</td>
                <td>{stock.ca_purpose}</td>
                <td>{stock.perChange}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataShow;
