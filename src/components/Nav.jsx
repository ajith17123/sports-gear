import '../assets/style/Nav.css';
import {Link} from 'react-router-dom';
import {NavHashLink} from 'react-router-hash-link';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Nav() {
    return (

<nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">
  Sport Sprint
</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
        <div className="mx-auto">
        <div className="input-group">
          <span className="input-group-text"><i className="bi bi-search"></i></span>
          <input 
            type="text" 
            className="form-control" 
            placeholder='Search' 
          />
        </div>
      </div>
    <ul className="navbar-nav flex-row gap-3">
  <li className="nav-item">
    <Link className="nav-link" to="/">
      <i className="bi bi-house"></i>
    </Link>
  </li>
  <li className="nav-item">
    <NavHashLink className="nav-link" to="/product">
      <i className="bi bi-journals"></i>
    </NavHashLink>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="/">
      <i className="bi bi-bag-fill"></i>
    </Link>
  </li>
  <li className="nav-item">
    <NavHashLink className="nav-link" to="/login">
      <i className="bi bi-heart"></i>
    </NavHashLink>
  </li>
  <li className="nav-item">
    <NavHashLink className="nav-link" to="/about">
      <i className="bi bi-question-octagon"></i>
    </NavHashLink>
  </li>
  <li className="nav-item">
    <NavHashLink className="nav-link" to="/login">
      <i className="bi bi-person"></i>
    </NavHashLink>
  </li>
</ul>
    </div>
  </div>
</nav>


    )
}

export default Nav;