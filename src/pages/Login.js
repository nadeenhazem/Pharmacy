import React from 'react';
// import '../styling/login.css'
import { useState } from 'react';
import axios from 'axios';
import '../styling/Home.css'
function Login() {
    const [loginUser, setLoginUser] = useState({
        email: '',
        password: '',
        
    })
    const [errors, setErrors] = useState({
        emailErr: null,
        passwordErr: null
    })
    const changeData = (e) => {
        if (e.target.name === 'email') {
            setLoginUser({
                ...loginUser,
                email: e.target.value
            })
            setErrors({
                ...errors,
                emailErr: e.target.value.length === 0 ?
                    "يجب ادخال البريد الالكتروني" :
                    !(/\S+@\S+\.\S+/.test(e.target.value)) ?
                        "هذا البريد الالكتروني غير صحيح" : null
            })

        }
        if (e.target.name === 'password') {
            setLoginUser({
                ...loginUser,
                password: e.target.value
            })
            setErrors({
                ...errors,
                passwordErr: e.target.value.length === 0 ?
                    "يجب ادخال كلمة السر" :
                    e.target.value.length < 8 ?
                        "كلمة السر يجب ان تكون اكثر من 8 ارقام " : null
            })
        }
    }
    const handleChange =(e)=>{
        e.preventDefault();
        axios.post('https://katkout.herokuapp.com/login/',{
            email:loginUser.email,
            password:loginUser.password  
        })
        .then((res)=>
        {
            console.log(res);
            window.location.href =`/`
            console.log(res.data);
        })
        .catch((err)=>{
            console.log(err)
            console.log(err.response.data.non_field_errors)
setErrors({
    ...errors,
    passwordErr :
    "البريد الالكتروني او كلمة السر غير صحيحين ",
   
})
        

        })
    }
    const [isShown, setIsSHown] = useState(false);
    const togglePassword = () => {
        setIsSHown((isShown) => !isShown);
    };

    return (
       <>
       <div className="container-fluid ps-md-0">
  <div className="row g-0">
    <div className="d-none d-md-flex col-md-4 col-lg-6 bg-image">
    </div>
    <div className="col-md-8 col-lg-6">
      <div className="login d-flex align-items-center py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-9 col-lg-8 mx-auto" style={{direction:'rtl'}}>
              <h3 className="login-heading mb-4">            
              تسجيل الدخول 
                </h3>

              <form>
                <div className="form-floating mb-3">
                  <input type="email" className="form-control" 
                  id="userName" 
                  name="email" placeholder="البريد الالكتروني"
                  onChange={(e) => changeData(e)} />
                 
                  <label htmlFor="floatingInput">البريد الالكتروني</label>
                </div>

                <p  style={{ color: 'red' }}className='parg'> {errors.emailErr} </p>

                <div className="form-floating mb-3">
                  
                  <input type={isShown ? "text" : "password"}
                  
                  className="form-control" 
                 name="password" placeholder="كلمة السر "
                 onChange={(e) => changeData(e)} 
                 />
                  <label htmlFor="floatingPassword">كلمة السر</label>
                </div>
                <label htmlFor="form-check-label" className="form-label">   ظهور كلمة السر</label>
                    <input
                        id="form-check-label"
                        type="checkbox"
                        className="form-check-input"
                        checked={isShown}
                        onChange={togglePassword}
                    />

                <p style={{ color: 'red' }} className='parg'> {errors.passwordErr} </p>


                <div className="d-grid">
                  <button className="btn btn-lg btn-primary btn-login text-uppercase fw-bold mb-2" 
                  onClick={handleChange}
                  disabled={errors.emailErr || errors.passwordErr}
                  >تسجيل الدخول </button>
                  
                </div>

              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

       </>
    );
}

export default Login;
//const [loginUser, setLoginUser] = useState({
    //         email: '',
    //         password: '',
            
    //     })
    //     const [errors, setErrors] = useState({
    //         emailErr: null,
    //         passwordErr: null
    //     })
    //     const changeData = (e) => {
    //         if (e.target.name === 'email') {
    //             setLoginUser({
    //                 ...loginUser,
    //                 email: e.target.value
    //             })
    //             setErrors({
    //                 ...errors,
    //                 emailErr: e.target.value.length === 0 ?
    //                     "يجب ادخال البريد الالكتروني" :
    //                     !(/\S+@\S+\.\S+/.test(e.target.value)) ?
    //                         "هذا البريد الالكتروني غير صحيح" : null
    //             })
    
    //         }
    //         if (e.target.name === 'password') {
    //             setLoginUser({
    //                 ...loginUser,
    //                 password: e.target.value
    //             })
    //             setErrors({
    //                 ...errors,
    //                 passwordErr: e.target.value.length === 0 ?
    //                     "يجب ادخال كلمة السر" :
    //                     e.target.value.length < 8 ?
    //                         "كلمة السر يجب ان تكون اكثر من 8 ارقام " : null
    //             })
    //         }
    //     }
    //     const handleChange =(e)=>{
    //         e.preventDefault();
    //         axios.post('https://katkout.herokuapp.com/login/',{
    //             email:loginUser.email,
    //             password:loginUser.password  
    //         })
    //         .then((res)=>
    //         {
    //             console.log(res);
    //             window.location.href =`/`
    //             console.log(res.data);
    //         })
    //         .catch((err)=>{
    //             console.log(err)
    //             console.log(err.response.data.non_field_errors)
    // setErrors({
    //     ...errors,
    //     passwordErr:
    //     "البريد الالكتروني او كلمة السر غير صحيحين "
    // })
            
    
    //         })
    //     }
    
    //     return (
    //         <div className="maindiv">
    //        <div className="logo">
    //             <img src={logo} alt=""/>
    //         </div>
    //           <h3 className="text-center mt-4 name">
    //             تسجيل الدخول 
    //         </h3>
    //         <form className="p-3 mt-3"  method="post">
    //             <div className="form-field d-flex align-items-center">
    //                 <span className="far fa-user"></span>
    //                 <input type="text"  id="userName" 
    //                  name="email" placeholder="البريد الالكتروني"
    //                  onChange={(e) => changeData(e)} />
    //             </div>
    //             <p  style={{ color: 'red' }}className='parg'> {errors.emailErr} </p>
    
    //             <div className="form-field d-flex align-items-center">
    //                 <span className="fas fa-key"></span>
    
    
    //                 <input type="password" name="password" placeholder="كلمة السر "
    //                                 onChange={(e) => changeData(e)} />
    //             </div>
    //             <p style={{ color: 'red' }} className='parg'> {errors.passwordErr} </p>
    
    //             <button className="btn mt-3"
    //             onClick={handleChange}
    //             disabled={errors.emailErr || errors.passwordErr}
    //             >تسجيل الدخول </button>
    //         </form>
    //          <div className="text-center fs-6">
    //              {/* <link>Forget password?</link> or 
    //             <link>Sign up</link>  */}
    //         </div>  
    //     </div>
    //     );
    // 