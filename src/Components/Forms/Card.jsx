import React from 'react'
import styles from '../../Styles/Forms.module.scss'

export function Card({detail, quantity, icon, bgColor}) {
    return (
        <>
            <div className={styles.card_body}>
                <div className={styles.card_icon} style={{backgroundColor: bgColor}}>
                    <img src={`/icons/${icon}.png`}  alt="" />
                </div>
                <div className={styles.card_text1}>{detail}</div>
                <div className={styles.card_text2}>{quantity}</div>
            </div>
        </>
    )
}