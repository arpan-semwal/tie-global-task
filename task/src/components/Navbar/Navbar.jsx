 import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="container">
        <div className="logo">
            <p>App Name</p>
        </div>

        <div className="name">
            
                <a>Dashboard</a>
                <a>Orders</a>
                <a>Positions</a>
                <a>Account</a>
                <a>Tools</a>
            
            
        </div>

        <div className="bt1">
            <button className="nav-button">Log out</button>
        </div>
       
    </div>
  )
}

export default Navbar