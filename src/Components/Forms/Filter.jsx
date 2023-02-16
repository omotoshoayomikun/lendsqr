import React, { useState } from 'react'
import styles from '../../Styles/Forms.module.scss'
import { InputSx } from './Input'
import Select from './Select'
import { Btn, ResetBtn } from './Btn'

function Filter() {

    const [values, setValues] = useState({
        organization: '',
        username: '',
        email: '',
        date: '',
        phoneNumber: '',
        status: '',
    })

    const inputs = [
        {
            id: 1,
            name: 'username',
            type: 'input',
            placeholder: 'User',
            label: 'Username'
        },
        {
            id: 1,
            name: 'email',
            type: 'email',
            placeholder: 'Email',
            label: 'Email'
        },
        {
            id: 1,
            name: 'date',
            type: 'date',
            placeholder: 'Date',
            label: 'Date'
        },
        {
            id: 1,
            name: 'phoneNumber',
            type: 'input',
            placeholder: 'phoneNumber',
            label: 'Phone Number'
        },
    ]

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }

    const selectOptions = {
        organization: ['Select', 'Organization', 'Church', 'Hills', 'Mountain'],
        status: ['Select', 'Organization', 'Church', 'Hills', 'Mountain']
    }

    console.log(values)

    return (
        <div className={styles.filter}>
            <div className="mb-3">
                <div className={`${styles.fil_text} mb-1`}>Organization</div>
                <Select values={selectOptions.organization} />
            </div>
            {
                inputs.map((input, i) => (
                    <>
                        <div key={i} className="mb-3">
                            <div className={`${styles.fil_text} mb-1`}>{input.label}</div>
                            <InputSx {...input} value={values[input.name]} onChange={onChange} />
                        </div>
                    </>
                ))
            }
            <div className="mb-3">
                <div className={`${styles.fil_text} mb-1`}>Status</div>
                <Select values={selectOptions.status} />
            </div>
            <div className='df' style={{gap: 12}}>
                <ResetBtn text='Reset' />
                <Btn text='Filter' />
            </div>
        </div>
    )
}

export default Filter