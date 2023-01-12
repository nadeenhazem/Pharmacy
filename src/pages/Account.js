import React from 'react';
import { Link, useParams } from 'react-router-dom';
import '../styling/Account.css'
import Login from '../components/Login';
import Signup from '../components/SignUp';
function Account(props) {
    let namep = useParams();
    let nameOfParams = namep.name
    return (
        <>
            <section style={{ maxHeight: 'auto' }}>
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col col-xl-10">
                            <div className="card Card-login" style={{ borderRadius: "1rem" }}>
                                <div className="row g-0">
                                    <div className="col-md-6 col-lg-6 d-flex align-items-center" style={{ direction: 'rtl' }}>
                                        <div className="card-body p-4 p-lg-5 ">

                                            <ul >
                                                <li className={nameOfParams === 'login' ? 'signin-up-active' : 'signin-up-inactive'}>
                                                    <Link to='/account/login'
                                                    >تسجيل دخول </Link></li>
                                                <li className={nameOfParams === 'signup' ? 'signin-up-active' : 'signin-up-inactive'}>
                                                    <Link to='/account/signup' >انشاء حساب </Link></li>
                                            </ul>


                                            <div >
                                                <div className={nameOfParams === 'login' ? 'form-active' : 'form-inactive'}>
                                                    <Login/>
                                                </div>
                                                <div className={nameOfParams === 'signup' ? 'form-active' : 'form-inactive'}>
                                                    <Signup/>
                                                </div>
                                            </div>


                                        </div></div>
                                    <div
                                        className="col-md-6 col-lg-6 d-none d-md-block" style={{ position: 'relative' }} >
                                        <img src="https://i.ibb.co/jG0744Z/loginback.png"
                                            alt=".." className={nameOfParams === 'login' ? 'image-active login-img' : 'image-inactive login-img'} />
                                        <img src="https://i.ibb.co/sW957NL/signupback.jpg"
                                            alt="login form" className={nameOfParams === 'signup' ? 'image-active ' : 'image-inactive '} style={{ marginTop: '15%' }} />

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
}

export default Account;