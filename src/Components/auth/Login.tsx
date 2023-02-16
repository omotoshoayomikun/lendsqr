import React, { useState } from "react";
import {FormInput} from "../Forms/Input";
import styles from "../../Styles/Login.module.scss";
import {Btn} from "../Forms/Btn";

export default function Login() {

    const [values, setValues] = useState({
        email: '',
        password: ''
    })

    const inputs = [
        {
            id: 1,
            name: 'email',
            type: 'email',
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
            <div className={`${styles.wrap_container} h-100vh`}>
                <div className={`${styles.log_box1} df df-column jc-space-around`}>
                    <div >
                        <img src="/images/logo.png" alt="logo" className={styles.log_logo} />
                    </div>
                    <div className={styles.log_img}>
                        <img src="/images/login_img.png" alt="Login Image" />
                    </div>
                    <div></div>
                </div>
                <div className={styles.log_box2} >
                    <form className={styles.sub_box2}>
                        <div className={styles.text1}>Welcome!</div>
                        <div className={`${styles.text2} mb-7`} >Enter details to login.</div>
                        {
                            inputs.map(input => (
                                <div key={input.id} className="mb-4">
                                    <FormInput {...input} value={values[input.name]} onChange={onChange} />
                                </div>

                            ))
                        }
                        <div className={`${styles.colored_text} mb-6`}>Forgot PASSWORD?</div>
                        <div>
                            <Btn text='LOG IN' />
                        </div>
                    </form>

                </div>
            </div>
        </>
    )
}