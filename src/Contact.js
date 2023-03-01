import React from 'react'
import { useState } from 'react';

const Contact = () => {

    const [userData, setUserData] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        address: "",
        message: "",
    });

    let name, value;
    const postUserData = (event) => {

        name = event.target.name;
        value = event.target.value;

        setUserData({ ...userData, [name]: value })
    };

    //----------connect to firebae-------------
    const submitData = async (event) => {
        event.preventDefault();
        const { firstName, lastName, phone, email, address, message } = userData;
        
        // ---------------Data fill-in box-compulsory-------------------
        if (firstName && lastName && phone && email && address && message) {
            const res = await fetch(
                'https://jeetpaywebsite-default-rtdb.firebaseio.com/userDataRecords.json',
                {
                    method: "POST",
                    headers: {
                        "content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        firstName,
                        lastName,
                        phone,
                        email,
                        address,
                        message,
                    }),
                }
            );
// -------------------Data-fill-complete-----------------
            if (res) {
                setUserData({
                    firstName: "",
                    lastName: "",
                    phone: "",
                    email: "",
                    address: "",
                    message: ""

                })
                alert("Data Stored");
            }
            else {
                alert("please fill the Data");
            }
        }
        else {
            alert("please fill the Data");
        }

    };
    return (
        <>
            <section className='contact-section mt-5 p-2 '>
                <div className='container'>
                    <div className='row'>
                        <div classNmae="col-12 col-lg-10 mx-auto">
                            <div className='row'>
                                <div className='contactus-leftside col-12 col-lg-5 '>
                                    <h1 className='main-heading'>Connect with our <br />Sales Team</h1>
                                    <p className='main-hero-para-p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam sapiente quos vero incidunt placeat tenetur adipisci error perspic.</p>
                                    <img src="./image/hero1.jpg" alt="contactus" className='img-fluid' />
                                </div>
                                {/* ----------------------rigtside-contact-form----------------------- */}

                                <div className='contact-rightside col-12 col-lg-7'>
                                    <form method=' POST'>
                                        <div className='row'>
                                            <div className='col-12 col-lg-6 contact-input-field '>
                                                <input type="text"
                                                    name='firstName'
                                                    id=''
                                                    placeholder='First Name'
                                                    className='form-control'
                                                    value={userData.firstName}
                                                    onChange={postUserData}
                                                />
                                            </div>
                                            <div className='col-12 col-lg-6 contact-input-field'>
                                                <input type="text"
                                                    name='lastName'
                                                    id=''
                                                    placeholder='Lastt Name'
                                                    className='form-control'
                                                    value={userData.lastName}
                                                    onChange={postUserData}
                                                />
                                            </div>
                                            <div className='col-12 col-lg-6 contact-input-field'>
                                                <input type="text"
                                                    name='phone'
                                                    id=''
                                                    placeholder='Phone Number'
                                                    className='form-control'
                                                    value={userData.phone}
                                                    onChange={postUserData}
                                                />
                                            </div>
                                            <div className='col-12 col-lg-6 contact-input-field'>
                                                <input type="text"
                                                    name='email'
                                                    id=''
                                                    placeholder='Email Id'
                                                    className='form-control'
                                                    value={userData.email}
                                                    onChange={postUserData}
                                                />
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className='col-12'>
                                                <input type="text" name='address' id='' placeholder='Add Address' className='form-control contact-input-field'
                                                    value={userData.address}
                                                    onChange={postUserData}
                                                />
                                            </div>
                                            <div className='col-12'>
                                                <input type="text" name='message' id='' placeholder='Enter Your message' className='form-control contact-input-field'
                                                    value={userData.message}
                                                    onChange={postUserData}
                                                />
                                            </div>
                                        </div>
                                        <div class="form-check form-checkbox-style">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                            <label class="form-check-label" className='main-hero-para'>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quas in voluptatem repellat? Quis porro .
                                            </label>
                                        </div>
                                        <div>
                                            <button type='submit' className='btn btn-style w-100 btn-new' onClick={submitData}>
                                                submit
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact;

