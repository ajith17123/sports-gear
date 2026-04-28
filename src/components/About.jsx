import '../assets/style/About.css';
import {Link} from 'react-router-dom';
import {NavHashLink} from 'react-router-hash-link';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ab1 from '../assets/images/ab1.jpg';
import ab2 from '../assets/images/ab2.jpg';

function About() {
    return (

        <>

        {/* {aboutsection} */}

<section className='about-sec py-5'>
    <div className='container'>
        <h2 className='sec-title' data-aos="zoom-in">Who We Are</h2>
        <div className='row align-items-center'>
             
                <div className='col-md-3 col-12' data-aos="fade-right">
                      <img src={ab1} className='img-fluid' alt="about-sport" />
                </div>

                <div className='col-md-6 col-12' data-aos="fade-up">
                     <p className='about-para'>
                At <strong>Sport Sprint</strong>, we believe your performance tells your story. 
                From professional-grade athletic footwear to high-performance fitness gear, we provide 
                the durability and comfort you need to excel. Our mission is to bridge the gap between 
                advanced sports technology and your personal dedication, ensuring every workout is a victory.
            </p>
                </div>

                <div className='col-md-3 col-12' data-aos="fade-left">
                      <img src={ab2} className='img-fluid' alt="about-fitness" />
                </div>

        </div>
    </div>
</section>

{/* {contactsection} */}

<section className='cont-sec py-5' id='cont'>
    <div className='container'>
         <h2 className='sec-title' data-aos="flip-up">Get in Touch</h2>
         <div className='row g-4'>

            <div className='col-md-4' data-aos="fade-up" data-aos-delay="100">
                <a href="tel:+91-9687452563" className='cont-card'>
                    <div className='contact-card'>
                       <i className="bi bi-telephone-fill"></i>
                       <h4 className='cont-head'>Call Our Coach</h4>
                       <p className='cont-para'>Customer support for athletes</p>
                       <h5 className='cont-link'>+91-9687452563</h5>
                    </div>
                </a>
            </div>

            <div className='col-md-4' data-aos="fade-up" data-aos-delay="300">
                <a href="mailto:sportsprint@gmail.com" className='cont-card'>
                    <div className='contact-card'>
                         <i className="bi bi-envelope"></i>
                         <h4 className='cont-head'>Email Support</h4>
                         <p className='cont-para'>Send us your gear inquiries</p>
                       <h5 className='cont-link'>sportsprint@gmail.com</h5>
                    </div>
                </a>
            </div>

            <div className='col-md-4' data-aos="fade-up" data-aos-delay="500">
                <a href="https://wa.me/+91-9685475214?text=Hi Sport Sprint, I need help picking the right gear!" className='cont-card'>
                    <div className='contact-card'>
                         <i className="bi bi-whatsapp"></i>
                         <h4 className='cont-head'>WhatsApp Expert</h4>
                         <p className='cont-para'>Get expert advice on products</p>
                       <h5 className='cont-link'>Chat Now</h5>
                    </div>
                </a>
            </div>

         </div>
    </div>
</section>

  {/* {mapsection} */}

       <section className='map-sec py-5'>
           <div className='container'>
                <div className='row'>
                    <div className='col-12' data-aos="zoom-in-up">
                         <div className='map-container'>
                              <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.855097437812!2d80.2424!3d13.0674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDA0JzAyLjYiTiA4MMKwMTQnMzIuNiJF!5e0!3m2!1sen!2sin!4v1620000000000"
                        width="100%" height="400" style={{border:0}} allowFullScreen="" loading="lazy">
                    </iframe>
                         </div>
                    </div>
                </div>
           </div>
       </section>



</>
        
    )
}

export default About;