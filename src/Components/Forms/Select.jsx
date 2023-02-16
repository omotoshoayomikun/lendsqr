import React, { useState } from 'react'
import styles from '../../Styles/Forms.module.scss'

export default function Select({values, setValue}) {

    // const values = ['Select', 'Organization', 'Church', 'Hills', 'Mountain']
    const [selected, setSelected] = useState(values[0])
    const [show, setShow] = useState(false)

    const onClick = (value) => {
        setSelected(value)
        // setValue({...value, organization: value})
        setShow(false)
    }

    const handleShow = () => {
        setShow(!show)
    }

    return (
        <>
            <div className={styles.sel_cont}>
                <div className={`${styles.select_box} df jc-space-between`} onClick={handleShow} onBlur={() => setShow(false)}>
                    <div>{selected}</div>
                    <div><img src="/icons/down.png" alt="" /></div>
                </div>
                {
                    show && (
                        <div className={styles.select_opt}>
                            {
                                values.map((val, i) => (
                                    <div key={i} className={styles.sel_text} onClick={() => onClick(val)}>{val}</div>

                                ))
                            }
                        </div>
                    )
                }
            </div>
        </>
    )
}
