

const Navbar = () => {
  return (
    <div>
      <div>
        <ul className="navbar">
          <li className="nav-item"><a href="#">NCAAF</a></li>
          <li className="nav-item"><a href="#">NCAAW</a></li>
          <li className="nav-item"><a href="#">NFL</a></li>
          <li className="nav-item"><a href="#">HOME</a></li>
        </ul>
      </div>
      <div className="warrior">
        <ul>
          <li><img src="images/warrior-sports-logo.png" alt="logo" width="300" height="300"/></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar