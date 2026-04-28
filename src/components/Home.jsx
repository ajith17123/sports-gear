import '../assets/style/Home.css';
import {Link} from 'react-router-dom';
import {NavHashLink} from 'react-router-hash-link';
import AOS from 'aos';
import 'aos/dist/aos.css';
import car1 from '../assets/images/c1.jpg';
import car2 from '../assets/images/c2.jpg';
import car3 from '../assets/images/c3.jpg';
import car4 from '../assets/images/c4.jpg';
import car5 from '../assets/images/c5.jpg';
import pp1 from '../assets/images/pa1.jpg';
import pp2 from '../assets/images/pa2.jpg';
import pp3 from '../assets/images/pa3.jpg';
import pp4 from '../assets/images/pa4.jpg';
import pp5 from '../assets/images/pa5.jpg';
import pp6 from '../assets/images/pa6.jpg';
import pp7 from '../assets/images/pa7.jpg';
import pp8 from '../assets/images/pa8.jpg';


function Home () {

   const categories = [
     {id: 1, name: "T-shirts", img: pp1 },
     {id: 2, name: "Running Shoes", img: pp2},
     {id: 3, name: "Cricket Gear", img: pp3},
     {id: 4, name: "Pants", img: pp4},
     {id: 5, name: "Kids Cycle", img: pp5},
     {id: 6, name: "Light Jacket", img: pp6},
     {id: 7, name: "Shorts", img: pp7},
     {id: 8, name: "Towels", img: pp8},
];

    return (

        <>
        
        {/* {herosection} */}

        <section className='hero-sec'>
             <div className='container'>
                <div className='row'>
                    <div className='col-lg-7 col-md-10' data-aos="fade-right">
                            <h1 className='hero-heading'>Push Your Limits <br /> 
          <span className="text-hero-h">Beyond Excellence</span>
        </h1>
        <h3 className="hero-subheading mb-4">
          Premium Gear for Every Athlete
        </h3>
        <p className="hero-para mb-5">
          At Sport Sprint, we believe your performance tells your story. 
          Discover world-class equipment and apparel designed to help you 
          dominate the game.
        </p>

      <div className="hero-btns" data-aos="zoom-in" data-aos-delay="400">
          <Link to="/product" className="btn-hero">
            Shop Now <i className="bi bi-arrow-right ms-2"></i>
          </Link>
          <NavHashLink to="/product" className="btn-hero">
            Explore More
          </NavHashLink>
          </div>

                    </div>
                </div>
             </div>
        </section>

        {/* {offersection} */}

        <section className='offer-sec py-5'>
             <div className='container'>
                 <div className='row g-4'>
                     
                    <div className='col-lg-4 col-md-6' data-aos="fade-up" data-aos-delay="100" >
                          <div className='coupon-card'>
                                 <div className='coupon-left'>
                                       <span className='coupon-tag'>coupon</span>
                                       <h2 className='offer-title'>UP TO ₹100 <small className='offer-title-s'>off</small></h2>
                                        <p className='offer-para'>On purchase above ₹1,499</p>
                                 </div>
                                 <div className='coupon-right'>
                                       <p className='offer-para-r'>use code</p>
                                       <span className="code-badge">NC100</span>
                                 </div>
                          </div>
                    </div>

                    <div className='col-lg-4 col-md-6' data-aos="fade-up" data-aos-delay="200">
                          <div className='coupon-card'>
                                 <div className='coupon-left'>
                                       <span className='coupon-tag'>coupon</span>
                                       <h2 className='offer-title'>UP TO ₹200 <small className='offer-title-s'>off</small></h2>
                                        <p className='offer-para'>On purchase above ₹2,499</p>
                                 </div>
                                 <div className='coupon-right'>
                                       <p className='offer-para-r'>use code</p>
                                       <span className="code-badge">NC200</span>
                                 </div>
                          </div>
                    </div>

                    <div className='col-lg-4 col-md-6' data-aos="fade-up" data-aos-delay="300">
                          <div className='coupon-card'>
                                 <div className='coupon-left'>
                                       <span className='coupon-tag'>coupon</span>
                                       <h2 className='offer-title'>UP TO ₹300 <small className='offer-title-s'>off</small></h2>
                                        <p className='offer-para'>On purchase above ₹3,499</p>
                                 </div>
                                 <div className='coupon-right'>
                                       <p className='offer-para-r'>use code</p>
                                       <span className="code-badge">NC300</span>
                                 </div>
                          </div>
                    </div>

                 </div>
             </div>
        </section>

        {/* {carouselsection} */}

          <section className='car-sec'>
        <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="10000">
      <img src={car1} className="d-block w-100" alt="product" />
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src={car2} className="d-block w-100" alt="product" />
    </div>
    <div className="carousel-item">
      <img src={car3} className="d-block w-100" alt="product" />
    </div>
    <div className="carousel-item">
      <img src={car4} className="d-block w-100" alt="product" />
    </div>
    <div className="carousel-item">
      <img src={car5} className="d-block w-100" alt="product" />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</section>

{/* {productsection} */}

<section className='prod-sec py-5'>
    <div className='container'>
        <h2 className='section-title' data-aos="fade-down">Shop By Categories</h2>
         <div className='row g-4'>
               {categories.map((item) => (
                <div key={item.id} className='col-lg-3 col-md-4 col-6'>
                     <div className='category-card text-center'>
                           <div className='category-img-box'>
                                  <img src={item.img} alt={item.name} className='img-fluid' />
                           </div>
                     </div>
                </div>
               ))}
         </div>
    </div>
</section>

{/* {aboutsection} */}

 <section className='about-sec py-5' data-aos="fade-up">
     <div className='container'>
        <h2 className='section-title'>Who We Are</h2>
          <div className='row justify-content-center'>
             <div className='col-lg-8 col-md-10 text-center'>
                 <p className='about-para'>
                    At <strong>Sport Sprint</strong>, we believe that every athlete deserves the best tools to achieve their personal best. 
                    From high-performance footwear to durable training gear, we curate world-class equipment designed to 
                    push your limits. Whether you are a professional or just starting your fitness journey, our mission 
                    is to empower your performance with quality, innovation, and style.
                </p>
                 <button className='about-butt'><Link to="/about" className='about-btn' >Read More</Link></button>
             </div>
          </div>
     </div>
 </section>

        </>
       
    )
}

export default Home;