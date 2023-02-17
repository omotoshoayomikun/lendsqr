import React from 'react'
import styles from '../../Styles/Forms.module.scss'
import { Link } from 'react-router-dom'

export function Card({ detail, quantity, icon, bgColor }) {
    return (
        <>
            <div className={styles.card_body}>
                <div className={styles.card_icon} style={{ backgroundColor: bgColor }}>
                    <img src={`/icons/${icon}.png`} alt="" />
                </div>
                <div className={styles.card_text1}>{detail}</div>
                <div className={styles.card_text2}>{quantity}</div>
            </div>
        </>
    )
}

export function Card2({ id }) {
    return (
        <>
            <div className={`${styles.card2_body}`}>
                <Link to={`${id}/general-details`} className={`${styles.card2_list} df pb-2`}>
                    <div className='mr-1'><img src="/icons/eyes.png" alt="" /></div>
                    <div className='fs-2'>View Details</div>
                </Link>
                <Link className={`${styles.card2_list} df pb-2`}>
                    <div className='mr-1'><img src="/icons/blacklist.png" alt="" /></div>
                    <div className='fs-2'>Blacklist User</div>
                </Link>
                <Link className={`${styles.card2_list} df pb-2`}>
                    <div className='mr-1'><img src="/icons/active_user.png" alt="" /></div>
                    <div className='fs-2'>Activate User</div>
                </Link>
            </div>
        </>
    )
}