import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styling/Client.css'
import axios from 'axios';
function AddClient(props) {
    const [imgFile, setImgFile] = useState();
    const AccessData = JSON.parse(localStorage.getItem('access'));

    const [ClientData, setClientData] = useState({
        name: '',
        place: '',
        national_id: '',
        phone1: '',
        phone2: '',
        img: '',

    });
    const [errors, setErrors] = useState({
        nameErr: null,
        placeErr: null,
        national_idErr: null,
        phone1Err: null,
        phone2Err: null,
        imgErr: null,

    })
    const changeData = (e) => {
        if (e.target.name === 'name') {
            setClientData({
                ...ClientData,
                name: e.target.value
            })
            setErrors({
                ...errors,
                nameErr:
                    e.target.value.length === 0 ?
                        "يجب ادخال الاسم المستخدم" :
                        e.target.value.match(/^\s*$/) || [].length > 0 ?
                            "فارغ " :
                            null
            })
        }
        if (e.target.name === 'place') {
            setClientData({
                ...ClientData,
                place: e.target.value
            })
            setErrors({
                ...errors,
                placeErr:
                    e.target.value.length === 0 ?
                        "يجب ادخال العنوان " :
                        e.target.value.match(/^\s*$/) || [].length > 0 ?
                            "فارغ " :
                            null
            })
        }
        if (e.target.name === 'national_id') {
            setClientData({
                ...ClientData,
                national_id: e.target.value
            })

            setErrors({
                ...errors,
                national_idErr:
                    e.target.value.length < 14 || e.target.value.length > 14 ?
                        "يجب ادخال الرقم القومي بشكل صحيح" :
                        null
            })
        }
        if (e.target.name === 'phone1') {
            setClientData({
                ...ClientData,
                phone1: e.target.value
            })
            setErrors({
                ...errors,
                phone1Err:
                    e.target.value.length < 11 || e.target.value.length > 11 ?
                        "يجب ادخال رقم الهاتف بشكل صحيح " :

                        e.target.value.length === 0 ?
                            "يجب ادخال رقم هاتف" :
                            null
            })
        }
        if (e.target.name === 'phone2') {
            setClientData({
                ...ClientData,
                phone2: e.target.value
            })
            setErrors({
                ...errors,
                phone2Err:
                    e.target.value.length < 11 || e.target.value.length > 11 ?
                        "يجب ادخال رقم الهاتف بشكل صحيح " :
                        e.target.value.length === 0 ?
                            "يجب ادخال رقم هاتف" :
                            null
            })
        }


    }
    const saveImg = (e) => {
        setImgFile(e.target.files[0]);

    };
    const handleChange = (e) => {
        const formClientData = new FormData();
        formClientData.append('name', ClientData.name);
        formClientData.append('place', ClientData.place);
        formClientData.append('national_id', ClientData.national_id);
        formClientData.append('phone1', ClientData.phone1);
        formClientData.append('phone2', ClientData.phone2);
        formClientData.append('img', imgFile);

        e.preventDefault();
        axios({
            method: 'post',
            url: 'https://hamdyadam.pythonanywhere.com/client/create-client/',
            headers: {
                'Authorization': `Bearer ${AccessData.access}`
            },
            data: formClientData

        }
        )
            .then((res) => {
                console.log('res:data:', res.data)

                window.location.href = `/`
            })
            .catch((err) => {
                console.log(err)
if(err.response.statusText==='Internal Server Error'){
    setErrors({
        ...errors,
        phone2Err:
                'يجب ادخال رقم الهاتف' 

    })

}
                else if (err.response.data.data.national_id) {

                    setErrors({
                        ...errors,
                        national_idErr:
                            err.response.data.data.national_id[0] === 'This field may not be blank.' ?
                                " يجب ادخال الرقم القومي" :
                                err.response.data.data.national_id[0] === 'client with this national id already exists.' ?
                                    "هذا الرقم القومي مسجل سابقا " :

                                    console.log(err.response.data.data.national_id)
                    })

                    console.log(errors)
                }
                else if (err.response.data.data.name) {
                    setErrors({
                        ...errors,
                        nameErr:
                            err.response.data.data.name[0] === 'This field may not be blank.' ?
                                " يجب ادخال الاسم المستخدم" :
                                err.response.data.data.name[0] === 'client with this name already exists.' ?
                                    "هذا الاسم مستخدم من قبل " :
                                    console.log(err.response.data.data.name)
                    })
                }
                else if (err.response.data.data.phone1) {
                    setErrors({
                        ...errors,
                        phone1Err:
                            err.response.data.data.phone1[0] === 'This field may not be blank.' ?
                                'يجب ادخال رقم الهاتف' :
                                err.response.data.data.phone1[0] === 'client with this phone1 already exists.' ?
                                    'هذا الرقم مستخدم من قبل ' :

                                    console.log(err.response.data.data.phone1[0])
                    })
                }
                else if (err.response.data.data.img) {
                    setErrors({
                        ...errors,
                        imgErr:
                            // "هذا الرقم القومي مسجل سابقا "
                            err.response.data.data.img[0] === 'The submitted data was not a file. Check the encoding type on the form.' ?
                                " يجب ادخال صوره شخصيه" :

                                console.log(err.response.data.data.img)
                    })
                }

else{
    console.log(err.response.statusText)

}
            }
            )

    }
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
                                            <h3 style={{ display: 'inline' }} className='signin-up-active'>
                                                <Link to={'/addclient'}>
                                                    أضافة عميل
                                                </Link>

                                            </h3 >
                                            <form className='Client-Form' style={{ marginLeft: '5%' }}>
                                                <div className="row">
                                                    <div className="col-md-6 mb-4">

                                                        <div className="form-outline">
                                                            <input type="text"
                                                                className=
                                                                {`form-control ${errors.nameErr ? "border-danger" : "border-success"}`}
                                                                placeholder="  الاسم المستخدم"
                                                                value={ClientData.name}
                                                                onChange={(e) => changeData(e)}
                                                                name="name"
                                                            />
                                                            <p className="text-danger"> {errors.nameErr} </p>

                                                        </div>

                                                    </div>
                                                    <div className="col-md-6 mb-4">

                                                        <div className="form-outline">
                                                            <input type="text"
                                                                className=
                                                                {`form-control ${errors.placeErr ? "border-danger" : "border-success"}`}
                                                                placeholder=" عنوان "
                                                                value={ClientData.place}
                                                                onChange={(e) => changeData(e)}
                                                                name="place"
                                                            />
                                                            <p className="text-danger"> {errors.placeErr} </p>

                                                        </div>

                                                    </div>


                                                </div>


                                                <div className="row">
                                                    <div className="col-md-12 mb-4">

                                                        <div className="form-outline">
                                                            <input type="text"
                                                                className=
                                                                {`form-control ${errors.national_idErr ? "border-danger" : "border-success"}`}
                                                                placeholder="الرقم القومي"
                                                                value={ClientData.national_id}
                                                                onChange={(e) => changeData(e)}
                                                                name="national_id"
                                                            />
                                                            <p className="text-danger"> {errors.national_idErr} </p>

                                                        </div>

                                                    </div>
                                                    <div className="col-md-6 mb-4">

                                                        <div className="form-outline">
                                                            <input type="text"
                                                                className=
                                                                {`form-control ${errors.phone1Err ? "border-danger" : "border-success"}`}
                                                                placeholder="رقم هاتف"
                                                                value={ClientData.phone1}
                                                                onChange={(e) => changeData(e)}
                                                                name="phone1"
                                                            />
                                                            <p className="text-danger"> {errors.phone1Err} </p>

                                                        </div>

                                                    </div>
                                                    <div className="col-md-6 mb-4">

                                                        <div className="form-outline">
                                                            <input type="text"
                                                                className=
                                                                {`form-control ${errors.phone2Err ? "border-danger" : "border-success"}`}
                                                                placeholder="رقم هاتف ثاني"
                                                                value={ClientData.phone2}
                                                                onChange={(e) => changeData(e)}
                                                                name="phone2"
                                                            />
                                                            <p className="text-danger"> {errors.phone2Err} </p>

                                                        </div>

                                                    </div>
                                                </div>

                                                <div className="row">

                                                    <div className="col-md-12 mb-4">

                                                        <div className="form-outline">
                                                            <input type="File" id="form3Example3cg"
                                                                onChange={saveImg}

                                                                name="img"
                                                                className="form-control form-control-lg" />
                                                            <p className="text-danger"> {errors.imgErr} </p>

                                                        </div>

                                                    </div>
                                                </div>
                                                <div className="d-flex justify-content-center" >
                                                    <button type="button"
                                                        className="d-grid"

                                                        onClick={handleChange}
                                                        disabled={errors.nameErr || errors.placeErr ||
                                                            errors.national_idErr || errors.phone1Err || errors.phone2Err}>

                                                        أضافة عميل</button>
                                                </div>


                                            </form>


                                        </div>
                                    </div>


                                    <div className="col-md-6 col-lg-6 d-none d-md-block" >
                                        <img src="https://i.ibb.co/qJcR66f/addclient-1.jpg"
                                            alt="login form" className="img-fluid" style={{ marginTop: '5%' }} />
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

export default AddClient;
