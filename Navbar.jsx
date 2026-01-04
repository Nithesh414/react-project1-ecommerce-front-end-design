function Navbar(){

    return(
<>
<nav className="navbar">
  <div className="logo">MyStore</div>

  <ul className="nav-links">
    <li><a href="#">Home</a></li>
    <li><a href="#">Products</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Contact</a></li>
  </ul>

  <button className="nav-btn">Login</button>
</nav>

</>
    )
}
export default Navbar; 