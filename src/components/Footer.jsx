import '../assets/style/Footer.css';
import {Link} from 'react-router-dom';
import {NavHashLink} from 'react-router-hash-link';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Footer () {
    return (

    <footer className='foot-sec py-5'>
        <div className='container'>
              <div className='row g-4'>
                    <div className='col-md-3 col-12'>
                         <h4 className='footer-title'>Sport Sprint</h4>
                         <p className="text-muted foot-para">
          Your one-stop destination for premium sports gear and apparel. 
          At Sport Sprint, we believe your performance tells your story.
        </p>
        <div className="social-links">
          <Link to="#"><i className="bi bi-facebook"></i></Link>
          <Link to="#"><i className="bi bi-instagram"></i></Link>
          <Link to="#"><i className="bi bi-twitter-x"></i></Link>
        </div>
                    </div>

                    <div className='col-md-3 col-12'>
                          <h6 className='foot-header'>Support</h6>
                          <ul>
                            <li><NavHashLink to="/about">Help Center</NavHashLink></li>
                            <li><NavHashLink to="/login">Shipping info</NavHashLink></li>
                            <li><NavHashLink to="/product">Returns</NavHashLink></li>
                            <li><NavHashLink to="/">Home</NavHashLink></li>
                          </ul>
                    </div>

                    <div className='col-md-3 col-12'>
                          <h6 className='foot-header'>Our Stores</h6>
                          <ul>
                            <li><NavHashLink to="/product">Men</NavHashLink></li>
                            <li><NavHashLink to="/product">Women</NavHashLink></li>
                            <li><NavHashLink to="/product">Kids</NavHashLink></li>
                            <li><NavHashLink to="/product">All Sports</NavHashLink></li>
                          </ul>
                    </div>

                    <div className='col-md-3 col-12'>
                           <h6 className='foot-header'>News Letter</h6>
                           <p className="small text-muted mb-5">Get updates on new stocks and exclusive offers.</p>
                           <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="Email Address" />
          <button className="btn-foot" type="button">Subscribe</button>
                           </div>
                    </div>

              </div>

<hr className='foot-line' />
            
            <div className='text-center copyright-text'>
                  <p>&copy; 2026 Sport Sprint. All Rights Reserved.</p>
            </div>
        </div>
    </footer>

    )
}


export default Footer;