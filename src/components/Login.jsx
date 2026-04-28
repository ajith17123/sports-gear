import '../assets/style/Login.css';
import {Link} from 'react-router-dom';
import {NavHashLink} from 'react-router-hash-link';
import React, { useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Login () {
    const [view, setView] = useState('login');
    return (

     <section className='auth-card py-5'>
            <div className='container'>
                <h2 className='sec-title'>Join The Sport Sprint Squad</h2>

                <div className='row justify-content-center'>
                    <div className='col-lg-5 col-md-8'>

                    <div className='d-flex log-h mb-4'>
                        <button 
                            className={`btn ${view === 'login' ? 'btn-x' : 'btn-y'}`} 
                            onClick={() => setView('login')}>
                            LOGIN
                        </button>
                        <button 
                            className={`btn ${view === 'register' ? 'btn-x' : 'btn-y'}`} 
                            onClick={() => setView('register')}>
                            REGISTER
                        </button>
                    </div>
                          
                    {view === 'login' ? (
                        <div className='login-form' data-aos="fade-right">
                            <h5 className='sec-heading mb-4 text-center'>Access Your Athlete Portal</h5>
                            <div className='social-login mb-4'>
                                <button className='btn-social'>
                                    <i className="bi bi-facebook me-2"></i>Facebook
                                </button>
                                <button className='btn-social'>
                                    <i className="bi bi-google me-2"></i>Google
                                </button>
                            </div>
                            <div className='divider mb-4 text-center text-muted'>- OR USE EMAIL -</div>
                            <input type="text" className='form-control mb-3 auth-input' placeholder='Email ID' />
                            <button className='btn-login w-100'>Login</button>
                            <p className='para-login mt-3 text-center'>New User? <span className='par-log fw-bold text-primary' style={{cursor:'pointer'}} onClick={() => setView('register')} >Sign Up Here.</span></p>            
                        </div>
                    ) : (
                        <div className='register-form' data-aos="fade-left">
                            <h5 className='sec-heading mb-4 text-center'>Create Profile</h5>
                            <input type="email" className="form-control mb-3 auth-input" placeholder="Email ID *" />
                            <input type="password" className="form-control mb-3 auth-input" placeholder="Create Password *" />
                            <input type="password" className="form-control mb-3 auth-input" placeholder="Confirm Your Password *" />
                            
            
                            <button className='btn-login w-100'>Start My Journey</button>
                            <p className='para-login mt-3 text-center'>Already a Member? <span className='par-log fw-bold text-primary' style={{cursor:'pointer'}} onClick={() => setView('login')} >Login Now</span></p>      
                        </div>
                    )}

                    </div>
                </div>
            </div>
      </section>

    )
}

export default Login;