import '../assets/style/Product.css';
import {Link} from 'react-router-dom';
import {NavHashLink} from 'react-router-hash-link';
import React, { useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import z1 from '../assets/images/z1.jpg';
import z2 from '../assets/images/z2.jpg';
import z3 from '../assets/images/z3.jpg';
import z4 from '../assets/images/z4.jpg';
import z5 from '../assets/images/z5.jpg';
import z6 from '../assets/images/z6.jpg';
import z7 from '../assets/images/z7.jpg';
import z8 from '../assets/images/z8.jpg';
import z9 from '../assets/images/z9.jpg';


function Product () {

    const products = [
      {id: 1, name: "Men Water Resistant Shoe", oldprice: 4999, newprice: 3599, img:z1 },
      {id: 2, name: "Winter Hiking Jacket", oldprice: 4999, newprice: 3299, img:z2 },
      {id: 3, name: "Camping Tent", oldprice: 5999, newprice: 4599, img:z4 },
      {id: 4, name: "Camping Chair", oldprice: 1199, newprice: 999, img:z5 },
      {id: 5, name: "Graphite Tennic Racket", oldprice: 3999, newprice: 2599, img:z6 },
      {id: 6, name: "Geologic Discovery 100 Archery", oldprice: 5599, newprice: 4799, img:z7 },
      {id: 7, name: "Kipsta Size 5 Machine Stitched Football", oldprice: 1099, newprice: 599, img:z8 },
      {id: 8, name: "Decathlon Cricket Plastic Kit", oldprice: 2299, newprice: 1499, img:z9 },
      {id: 9, name: "Quechua Mens Winter Proof Jacket", oldprice: 4999, newprice: 3299, img:z3 }
    ];
    return (

 <section className='prod-sec'>
      <div className='container'>
            <h2 className='header'>Our Products</h2>
            <div className='row g-4'>

            {products.map((item, index) => (
                <div className='col-lg-4 col-md-6 col-12' key={item.id} data-aos="fade-up" 
                            data-aos-delay={index * 100} >
                        <div className='product-card'>
                           <div className='pro-img-wrapper'>
                                <img src={item.img} className='img-fluid product-img' alt= {item.name} />
                           </div>
                           <div className='prod-details'>
                                <h5 className='prod-title'>{item.name}</h5>
                                <div className='price-box'>
                                       <span className='old-price'>₹{item.oldprice}</span>
                                       <span className='new-price'>₹{item.newprice}</span>
                                </div>
                                <button className='prod-btn'>Add to Cart <i className="bi bi-cart-plus ms-2"></i></button>
                           </div> 
                        </div>

                </div>
            )
        )}
                 

            </div>
     </div>
 </section>

    );
}

export default Product;