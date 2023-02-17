import React, { useState } from "react";
import { FormInput } from "../Forms/Input";
import styles from "../../Styles/Login.module.scss";
import { useNavigate, Link } from 'react-router-dom'
import { Btn } from "../Forms/Btn";

export default function Login() {

    const navigate = useNavigate()

    const [values, setValues] = useState({
        email: '',
        password: ''
    })

    const [toggleShowPass, setToggleShowPass] = useState(false)

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
            type: toggleShowPass ? 'text' : 'password',
            placeholder: 'Password',
            pass_change: toggleShowPass ? 'HIDE' : 'SHOW'
        },
    ]

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }

    const handleBtn = () => {

        // try {

        // } catch (err) {
        //     console.log(err)
        // }


        navigate('/admin/users')
    }

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
                {/* LOGO FOR SMALL SCREEN */}
                <div className={styles.logo_sm} >
                    <img src="/images/logo.png" alt="logo" className={styles.logo_sm_img} />
                </div>
                {/* ///////////////////// */}
                <div className={styles.log_box2} >
                    <form className={styles.sub_box2}>
                        <div className={styles.text1}>Welcome!</div>
                        <div className={`${styles.text2} mb-7`} >Enter details to login.</div>
                        {
                            inputs.map(input => (
                                <div key={input.id} className="mb-4">
                                    <FormInput {...input} value={values[input.name]} onChange={onChange} handleToggleDis={() => setToggleShowPass(!toggleShowPass)} />
                                </div>

                            ))
                        }
                        <Link className={`${styles.colored_text} mb-6`}>Forgot PASSWORD?</Link>
                        <div>
                            <Btn text='LOG IN' style={{ height: '50px' }} handleBtn={handleBtn} />
                        </div>
                    </form>

                </div>
            </div>
        </>
    )
}