import React from 'react';
import '../styling/Account.css'
import { useState } from 'react';
import axios from 'axios';
import { BsEyeSlash, BsEye } from "react-icons/bs";

function Login() {
  const[saveAccess,setSaveAccess]=useState([]);
  localStorage.setItem('access',JSON.stringify(saveAccess))
  // localStorage.setItem('UserData',JSON.stringify(saveAccess))
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
          e.target.value.length < 2 ?
            "كلمة السر يجب ان تكون اكثر من 2 ارقام " : null
      })
    }
  }
  const handleChange = (e) => {
    e.preventDefault();
    axios.post('https://hamdyadam.pythonanywhere.com/login/', {
      email: loginUser.email,
      password: loginUser.password
    },{
      
    })
    

      .then((res) => {
        console.log(res);
        window.location.href = `/`
        console.log(res.data);
        setSaveAccess(saveAccess=>saveAccess=res.data.data)
      })
      .catch((err) => {
        console.log(err)
        console.log(err.response.data.non_field_errors)
        setErrors({
          ...errors,
          passwordErr:
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
                      <form className='login-Form'>
                <div className="row">

                    <div className="col-md-12 mb-4">

                        <div className="form-outline">
                            <input type="text"
                                className=
                                {`form-control ${errors.emailErr ? "border-danger" : "border-success"}`}
                                placeholder="  البريد الالكتروني"

                                onChange={(e) => changeData(e)}
                                name="email"
                                id="userName"
                            />
                            <p className="text-danger"> {errors.emailErr} </p>

                        </div>

                    </div>

                </div>
                <div className="row">

                    <div className="col-md-12 mb-4">

                        <div className="form-outline">
                            <input type={isShown ? "text" : "password"}
                                className='form-control'
                                name="password" placeholder="كلمة السر "
                                onChange={(e) => changeData(e)}
                                style={{display:'inline'}}
                            />
                            {isShown ? <BsEye onClick={togglePassword} className='showPass'/>
                                : <BsEyeSlash onClick={togglePassword} className='showPass'/>}
                            <p className="text-danger"> {errors.passwordErr} </p>

                        </div>

                    </div>

                </div>
               

                <div className="d-grid">
                    <button
                        onClick={handleChange}
                        disabled={errors.emailErr || errors.passwordErr}
                    >تسجيل الدخول </button>

                </div>

            </form>
    </>
  );

}

export default Login;
