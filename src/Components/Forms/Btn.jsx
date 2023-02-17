import React from 'react'
import styles from '../../Styles/Forms.module.scss'

export function Btn({ text, style, handleBtn }) {
    return (
        <>
            <div className={styles.btn} style={style} onClick={handleBtn}>
                {text}
            </div>
        </>
    )
}

export function ResetBtn({ text }) {
    return (
        <>
            <div className={styles.reset_btn}>
                {text}
            </div>
        </>
    )
}

export function DangerOutlinBtn({ text }) {
    return (
        <>
            <div className={styles.danger_line_btn}>
                {text}
            </div>
        </>
    )
}

export function PriOutlinBtn({ text }) {
    return (
        <>
            <div className={styles.pri_line_btn}>
                {text}
            </div>
        </>
    )
}
