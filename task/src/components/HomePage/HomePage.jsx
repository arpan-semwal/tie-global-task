import Navbar from '../Navbar/Navbar'
import SearchBox from "../SearchBox/SearchBox"
import MarketStatus from "../MarketStatus/MarketStatus";
import "../../App.css";
const HomePage = () => {
  return (
    <>
    
    <Navbar/>
    <div className='app-container'>
     <SearchBox/>
     <MarketStatus/>
    </div>
    </>
  ) 
}

export default HomePage