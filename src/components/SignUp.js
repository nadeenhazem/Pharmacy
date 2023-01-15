import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import '../styling/Account.css'
import Form from 'react-bootstrap/Form';

function Signup() {
    const [saveAccess, setSaveAccess] = useState([]);
    localStorage.setItem('access', JSON.stringify(saveAccess))
    const [file, setFile] = useState();
    const [userData, setUserData] = useState({

        username: '',
        display_name: '',
        email: '',
        phone_number: '',
        ID: '',
        password: '',
        confirm: '',
        gender: '',
        dob: '',
        avatar: '',

    })

    const [errors, setErrors] = useState({

        usernameErr: null,
        display_nameErr: null,
        emailErr: null,
        phone_numberErr: null,
        IDErr: null,
        passwordErr: null,
        confirmErr: null,
        genderErr: null,
        dobErr: null,
        avatarErr: null,
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
        if (e.target.name === "phone_number") {
            setUserData({
                ...userData,
                phone_number: e.target.value
            })

            setErrors({
                ...errors,
                phone_numberErr:
                    e.target.value.length < 11 || e.target.value.length > 11 ?
                        "يجب ادخال رقم الهاتف بشكل صحيح " :
                        null

            })
        }
        if (e.target.name === "avatar") {
            setErrors({
                ...errors,
                avatarErr:

                    console.log()

            })

        }

        if (e.target.name === "dob") {
            setUserData({
                ...userData,
                dob: e.target.value
            }
            )

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

                            "يجب ادخال 8 حروف مع حروف كبيره وصغيره وشكل مميز" : 
                            e.target.value !== userData.confirm ?
                            "يجب تاكيد الرقم" : null
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
    const saveFile = (e) => {
        setFile(e.target.files[0]);
        console.log(e.target.files[0].size)
        console.log(e.target.value)

    };
    const handleChange = (e) => {
        const formData = new FormData();
        formData.append('username', userData.username);
        formData.append('display_name', userData.display_name);
        formData.append('email', userData.email);
        formData.append('phone_number', userData.phone_number);
        formData.append('ID', userData.ID);
        formData.append('password', userData.password);
        formData.append('confirm', userData.confirm);
        formData.append('gender', userData.gender);
        formData.append('dob', userData.dob);
        formData.append("avatar", file);

        e.preventDefault();
        axios({
            method: 'post',
            url: 'https://hamdyadam.pythonanywhere.com/signup/',
            data: formData
            // .post("https://hamdyadam.pythonanywhere.com/signup/", {

            // username: userData.username,
            // display_name: userData.display_name,
            // email: userData.email,
            // phone_number: userData.phone_number,
            // ID: userData.ID,
            // password: userData.password,
            // confirm: userData.confirm,
            // gender: userData.gender,
            // dob: userData.dob,
            // avatar: file.name

        }
        )

            .then((res) => {
                console.log(res)
                console.log('res:data:', res.data)
                setSaveAccess(saveAccess => saveAccess = res.data.data)

                console.log("formdata:", formData)
                window.location.href = `/`
            })
            .catch((err) => {
                console.log(err);
                if (err.response.data.data.email) {

                    setErrors({
                        ...errors,
                        emailErr:
                            "هذا البريد الالكتروني موجود"
                    })

                    console.log(errors)
                }
                if (err.response.data.data.username) {
                    setErrors({
                        ...errors,
                        usernameErr:
                            "هذا الاسم مستخدم من قبل"

                    })}
                    if (err.response.data.data.avatar) {
                        setErrors({
                            ...errors,
                            avatarErr:
                                "يجب ادخال صوره "
                        })}
                    }
                )
    }


    return (

        <>
            <form className='SignUp-Form' style={{ marginLeft: '5%' }}>

                <div className="row">
                    <div className="col-md-6 mb-4">

                        <div className="form-outline">
                            <input type="text"
                                className=
                                {`form-control ${errors.usernameErr ? "border-danger" : "border-success"}`}
                                placeholder="  الاسم الكامل"
                                value={userData.username}
                                onChange={(e) => changeData(e)}
                                name="username"
                            />
                            <p className="text-danger"> {errors.usernameErr} </p>

                        </div>

                    </div>
                    <div className="col-md-6 mb-4">

                        <div className="form-outline">
                            <input type="text"
                                className=
                                {`form-control ${errors.display_nameErr ? "border-danger" : "border-success"}`}
                                placeholder="  الاسم المستخدم"
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
                            <input type="text"
                                className=
                                {`form-control ${errors.emailErr ? "border-danger" : "border-success"}`}
                                placeholder="  البريد الالكتروني"
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
                            <input type="text"
                                className=
                                {`form-control ${errors.phone_numberErr ? "border-danger" : "border-success"}`}
                                placeholder="  رقم الهاتف"
                                value={userData.phone_number}
                                onChange={(e) => changeData(e)}
                                name="phone_number"
                            />
                            <p className="text-danger"> {errors.phone_numberErr} </p>

                        </div>

                    </div>
                    <div className="col-md-6 mb-4 pb-2">

                        <div className="form-outline">
                            <input type="text"
                                className=
                                {`form-control ${errors.IDErr ? "border-danger" : "border-success"}`}
                                placeholder="  الرقم القومي"
                                value={userData.ID}
                                onChange={(e) => changeData(e)}
                                name="ID"
                            />
                            <p className="text-danger"> {errors.IDErr} </p>

                        </div>

                    </div>
                </div>

                <div className="row">
                    <div className="col">

                        <div className="form-outline mb-4">
                            <input type="File" id="form3Example3cg"
                                onChange={saveFile}

                                name="avatar"
                                className="form-control form-control-lg" />
                        </div>
                        <p className="text-danger"> {errors.avatarErr} </p>

                    </div>

                </div>

                <div className="row">
                    <div className="col-md-6 mb-4 pb-2">

                        <div className="form-outline">
                            <input type="password"
                                className=
                                {`form-control ${errors.passwordErr ? "border-danger" : "border-success"}`}
                                placeholder=" الرقم السري"
                                value={userData.password}
                                onChange={(e) => changeData(e)}
                                name="password"
                            />
                            <p className="text-danger"> {errors.passwordErr} </p>

                        </div>

                    </div>
                    <div className="col-md-6 mb-4 pb-2">

                        <div>
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
                    <div className="col-md-3 mb-4 pb-2">
                        <div className="form-outline">

                            <Form.Select name="gender"
                                style={{ backgroundColor: 'rgb(240, 242, 240)' }}
                                value={userData.gender}
                                onChange={(e) => changeData(e)}>
                                <option>النوع</option>
                                <option value="female">انثي</option>
                                <option value="male">رجل</option>

                                {/* </select> */}
                            </Form.Select>
                        </div>


                    </div>
                    <div className="col-md-9 mb-4 pb-2" >
                        <div >

                            <input type="date" id="birthday" name='dob'
                                value={userData.dob}
                                onChange={(e) => changeData(e)}
                                className='BirthDate-Input' />

                        </div>
                    </div>
                </div>

                <div className="d-flex justify-content-center" >
                    <button type="button"
                        className="d-grid"
                        style={{ padding: '2%', fontSize: 'larger', maxHeight: '20rem' }}
                        onClick={handleChange}
                        disabled={errors.usernameErr || errors.display_nameErr || errors.phone_numberErr
                            //  || errors.avatarErr 
                            || errors.IDErr || errors.passwordErr
                            || errors.genderErr || errors.confirmErr}>

                        انشاء حساب</button>
                </div>

            </form>


        </>

    );
}
export default Signup