import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styling/signup.css';
import CheckenBg from '../Imgs/chBg.jpg'
import axios from 'axios'


function Signup() {

    const [userData, setUserData] = useState({

        username: '',
        display_name: '',
        email: '',
        phone: '',
        ID: '',
        password: '',
        confirm: '',
        gender: '',
        dob:'',
    })

    const [errors, setErrors] = useState({

        usernameErr: null,
        display_nameErr: null,
        emailErr: null,
        phoneErr: null,
        IDErr: null,
        passwordErr: null,
        confirmErr: null,
        genderErr: null,
        dobErr:null,

    })
    const changeData = (e) => {
        if (e.target.name === "username") {
            setUserData({
                ...userData,
                username: e.target.value
            })

            setErrors({
                ...errors,
                usernameErr:
                    e.target.value.length === 0 ?
                        "يجب ادخال الاسم الاول " :
                        e.target.value.match(/^\s*$/) || [].length > 0 ?
                            "فارغ " :
                            null

            })
        }
        if (e.target.name === 'email') {
            setUserData({
                ...userData,
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
        if (e.target.name === "display_name") {
            setUserData({
                ...userData,
                display_name: e.target.value
            })

            setErrors({
                ...errors,
                display_nameErr:
                    e.target.value.length === 0 ?
                        "يجب ادخال الاسم المستخدم" :
                        e.target.value.match(/^\s*$/) || [].length > 0 ?
                            "فارغ " :
                            null

            })
        }
        if (e.target.name === "gender") {
            setUserData({
                ...userData,
                gender: e.target.value
            })


        }
        if (e.target.name === "phone") {
            setUserData({
                ...userData,
                phone: e.target.value
            })

            setErrors({
                ...errors,
                phoneErr:
                    e.target.value.length < 11 || e.target.value.length > 11 ?
                        "يجب ادخال رقم الهاتف بشكل صحيح " :
                        null

            })
        }
        if (e.target.name === "dob") {
            setUserData({
                ...userData,
                dob: e.target.value
            })

            setErrors({
                ...errors,
                dobErr:
                e.target.value.length === 0 ?
                "يجب ادخال تاريخ الميلاد " :
                        null

            })
        }
        if (e.target.name === "ID") {
            setUserData({
                ...userData,
                ID: e.target.value
            })

            setErrors({
                ...errors,
                IDErr:
                    e.target.value.length < 14 || e.target.value.length > 14 ?
                        "يجب ادخال الرقم القومي بشكل صحيح" :
                        null
            })
        }

        if (e.target.name === "password") {
            var regpassword = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})");

            setUserData({
                ...userData,
                password: e.target.value
            })


            setErrors({
                passwordErr:
                    e.target.value.length === 0 ?
                        "يجب ادخال رقم سري" :
                        !(regpassword.test(e.target.value)) ?

                            "يجب ادخال 8 حروف مع حروف كبيره وصغيره وشكل مميز" : null
            })
        }

        if (e.target.name === "confirm") {
            setUserData({
                ...userData,
                confirm: e.target.value
            })


            setErrors({
                confirmErr:
                    e.target.value.length === 0 ?
                        "يجب ادخال اعادة الرقم السري" :
                        e.target.value !== userData.password ?
                            "غير متشابهه " : null
            })
        }


    }
    const handleChange =(e)=>{
        e.preventDefault();
        axios
        .post("https://katkout.herokuapp.com/signup/",{
            username: userData.username,
            display_name: userData.display_name,
            email: userData.email,
            phone: userData.phone,
            ID: userData.ID,
            password: userData.password,
            confirm: userData.confirm,
            gender: userData.gender,
            dob:userData.dob,
        })
        .then((res)=>{
        console.log(res)
        console.log(res.data)

        
        console.log(userData)
        window.location.href =`/login`
        })
        .catch((err)=>{
            console.log(err);
            if (err.response.data.email) {

                setErrors({
                    ...errors,
                    emailErr:
                        "هذا البريد الالكتروني موجود"
                })

                console.log(errors)}
            if(err.response.data.username){
                setErrors({
                    ...errors,
                    usernameErr:
                        "هذا الاسم مستخدم من قبل"
                }) 
            }
        })
    }
    return (

        <>
            <section className="vh-150 bg-image"
                style={{ backgroundImage: `url(${CheckenBg})` }}>
                <div className="mask d-flex align-items-center h-100 gradient-custom-3">
                    <div className="container h-100">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                                <div className="card" style={{ borderRadius: " 15px" }}>
                                    <div className="card-body p-5">
                                        <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">إنشاء حساب</h3>
                                        <form>

                                            <div className="row">
                                                <div className="col-md-6 mb-4">

                                                    <div className="form-outline">
                                                        <label className="form-label" htmlFor="firstName"> الاسم الكامل</label>
                                                        <input type="text"
                                                            className=
                                                            {`form-control ${errors.usernameErr ? "border-danger" : "border-success"}`}
                                                            placeholder="قم بأدخال  الاسم الكامل"
                                                            value={userData.username}
                                                            onChange={(e) => changeData(e)}
                                                            name="username"
                                                        />
                                                        <p className="text-danger"> {errors.usernameErr} </p>

                                                    </div>

                                                </div>
                                                <div className="col-md-6 mb-4">

                                                    <div className="form-outline">
                                                        <label className="form-label" htmlFor="lastName">الاسم المستخدم</label>
                                                        <input type="text"
                                                            className=
                                                            {`form-control ${errors.display_nameErr ? "border-danger" : "border-success"}`}
                                                            placeholder="قم بأدخال الاسم المستخدم"
                                                            value={userData.display_name}
                                                            onChange={(e) => changeData(e)}
                                                            name="display_name"
                                                        />
                                                        <p className="text-danger"> {errors.display_nameErr} </p>

                                                    </div>

                                                </div>
                                            </div>


                                            <div className="row">

                                                <div className="col-md-12 mb-4">

                                                    <div className="form-outline">
                                                        <label className="form-label" htmlFor="email">البريد الالكتروني</label>
                                                        <input type="text"
                                                            className=
                                                            {`form-control ${errors.emailErr ? "border-danger" : "border-success"}`}
                                                            placeholder="قم بأدخال البريد الالكتروني"
                                                            value={userData.email}
                                                            onChange={(e) => changeData(e)}
                                                            name="email"
                                                        />
                                                        <p className="text-danger"> {errors.emailErr} </p>

                                                    </div>

                                                </div>
                                            </div>


                                            <div className="row">
                                                <div className="col-md-6 mb-4 pb-2">

                                                    <div className="form-outline">
                                                        <label className="form-label" htmlFor="phone">رقم الهاتف</label>
                                                        <input type="text"
                                                            className=
                                                            {`form-control ${errors.phoneErr ? "border-danger" : "border-success"}`}
                                                            placeholder="قم بأدخال رقم الهاتف"
                                                            value={userData.phone}
                                                            onChange={(e) => changeData(e)}
                                                            name="phone"
                                                        />
                                                        <p className="text-danger"> {errors.phoneErr} </p>

                                                    </div>

                                                </div>
                                                <div className="col-md-6 mb-4 pb-2">

                                                    <div className="form-outline">
                                                        <label className="form-label" htmlFor="phoneNumber">رقم بطاقة الرقم القومي</label>
                                                        <input type="text"
                                                            className=
                                                            {`form-control ${errors.IDErr ? "border-danger" : "border-success"}`}
                                                            placeholder="قم بأدخال الرقم القومي"
                                                            value={userData.ID}
                                                            onChange={(e) => changeData(e)}
                                                            name="ID"
                                                        />
                                                        <p className="text-danger"> {errors.IDErr} </p>

                                                    </div>

                                                </div>
                                            </div>

                                            {/* <div className="row">
                                                <div className="col">

                                                    <div className="form-outline mb-4">
                                                        <label className="form-label" htmlFor="form3Example3cg">قم بإدراج صورتك الشخصية</label>
                                                        <input type="File" id="form3Example3cg" className="form-control form-control-lg" />
                                                    </div>

                                                </div>

                                            </div> */}

                                            <div className="row">
                                                <div className="col-md-6 mb-4 pb-2">

                                                    <div className="form-outline">
                                                        <label className="form-label" htmlFor="emailAddress">رقم سري </label>
                                                        <input type="password"
                                                            className=
                                                            {`form-control ${errors.passwordErr ? "border-danger" : "border-success"}`}
                                                            placeholder="قم بأدخال الرقم السري"
                                                            value={userData.password}
                                                            onChange={(e) => changeData(e)}
                                                            name="password"
                                                        />
                                                        <p className="text-danger"> {errors.passwordErr} </p>

                                                    </div>

                                                </div>
                                                <div className="col-md-6 mb-4 pb-2">

                                                    <div className="form-outline">
                                                        <label className="form-label" htmlFor="phoneNumber">تأكيد الرقم السري</label>
                                                        <input type="password"
                                                            className=
                                                            {`form-control ${errors.confirmErr ? "border-danger" : "border-success"}`}
                                                            placeholder="قم بتأكيد الرقم السري"
                                                            value={userData.confirm}
                                                            onChange={(e) => changeData(e)}
                                                            name="confirm"
                                                        />
                                                        <p className="text-danger"> {errors.confirmErr} </p>

                                                    </div>

                                                </div>
                                            </div>

                                            <div className="row" style={{ direction: 'rtl' }}>
                                                <div className="col-md-6 mb-4 pb-2">
                                                    <div className="form-outline">
                                                        <label className="form-label" htmlFor="gender"  >  اختر النوع  </label>
                                                        <select name="gender"
                                                            value={userData.gender}
                                                            onChange={(e) => changeData(e)}>
                                                            <option value="female">انثي</option>
                                                            <option value="male">رجل</option>

                                                        </select>
                                                    </div>


                                                </div>
                                                <div className="col-md-6 mb-4 pb-2">
                                                    <div className="form-outline">
                                                        
                                                        <label htmlFor="birthday">تاريخ الميلاد </label>
                                                        <input type="date" id="birthday" name='dob' 
                                                        value={userData.dob}
                                                        onChange={(e) => changeData(e)}/>

                                                   </div>
                                                </div>
                                                </div>

                                                <div className="d-flex justify-content-center">
                                                    <button type="button"
                                                        className="btn  btn-block btn-lg gradient-custom-4 text-body"
                                                        style={{ background: 'linear-gradient(to right, rgba(132, 250, 176, 0.5), rgba(143, 211, 244, 0.5))' }}
                                                        onClick={handleChange}
                                                        disabled={errors.usernameErr || errors.display_nameErr || errors.phoneErr || errors.IDErr ||
                                                            errors.passwordErr || errors.genderErr || errors.confirmErr}>

                                                        تسجيل الدخول</button>
                                                </div>

                                        </form>
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
export default Signup