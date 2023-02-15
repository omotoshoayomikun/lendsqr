import React from 'react'
import styles from '../../Styles/Forms.module.scss'

export function Btn({ text }) {
    return (
        <>
            <div className={styles.btn}>
                {text}
            </div>
        </>
    )
}
