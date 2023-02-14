import React, { useState } from "react";
import '../../Styles/Login.scss'
import FormInput from "../Forms/Input";
import Btn from "../Forms/Btn";

export default function Login() {

    const [values, setValues] = useState({
        email: '',
        password: ''
    })

    const inputs = [
        {
            id: 1,
            name: 'email',
            type: 'input',
            placeholder: 'Email',
        },
        {
            id: 2,
            name: 'password',
            type: 'password',
            placeholder: 'Password',
        },
    ]

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }

    console.log(values)


    return (
        <>
            <div className="wrap-container h-100vh">
                <div className="log-box1 df df-column" style={{ justifyContent: 'space-around' }}>
                    <div >
                        <img src="/images/logo.png" alt="logo" className="log-logo" />
                    </div>
                    <div className="log-img">
                        <img src="/images/login_img.png" alt="Login Image" />
                    </div>
                    <div></div>
                </div>
                <div className="log-box2" >
                    <form className="sub-box2">
                        <div className="text1">Welcome!</div>
                        <div className="text2 mb-7" >Enter details to login.</div>
                        {
                            inputs.map(input => (
                                <div key={input.id} className="mb-4">
                                    <FormInput {...input} onChange={onChange} />
                                </div>

                            ))
                        }
                        <div className="colored-text mb-6">Forgot PASSWORD?</div>
                        <div>
                            <Btn text='Login' />
                        </div>
                    </form>

                </div>
            </div>
        </>
    )
}