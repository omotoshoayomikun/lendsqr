import React, { useEffect, useState } from 'react'
import styles from '../../../Styles/Users.module.scss'
import { DangerOutlinBtn, PriOutlinBtn } from '../../Forms/Btn'
import { NavLink, Outlet, Link, useParams } from 'react-router-dom'
import axios from 'axios'
import { Spinner } from '../../Forms/Spinner'

function UserDetail() {

    const { userId } = useParams()
    const [detail, setDetail] = useState({})
    const [spinner, setSpinner] = useState(true)

    useEffect(() => {
        const getUserDetail = async () => {
            try {
                const response = await axios.get(` https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${userId}`)
                setDetail(response.data)
                setSpinner(false)
            } catch (err) {
                setSpinner(false)
                console.log(err)
            }
        }

        getUserDetail()
    }, [])


    if (spinner) {
        return <Spinner />
    }

    return (
        <>
            <Link to='/admin/users' className='df '>
                <div><img src="/icons/arrow.png" alt="" /></div>
                <div className='ml-1'>Back to Users</div>
            </Link>
            <div className="df jc-space-between  mt-6 mb-3">
                <div className={styles.text_h}>User Details</div>
                <div className='df'>
                    <div className="mr-2"><DangerOutlinBtn text='Blacklist User' /></div>
                    <div className=""><PriOutlinBtn text='Activate User' /></div>
                </div>
            </div>

            <div className="card flex-wrap" style={{ paddingBottom: '0px' }}>
                <div className={`${styles.zasxw}`}>
                    <div className={`${styles.ZXround} mr-2`}>
                        <img src={detail.profile.avatar ? detail.profile.avatar : '/icons/sigle_user.png'} className={`${styles.round} obj-contain`} alt="" />
                    </div>
                    <div className='mr-3'>
                        <div className={`${styles.text1} mb-1`}>{detail.profile.firstName + ' ' + detail.profile.lastName}</div>
                        <div className={styles.text2}>{detail.userName}</div>
                    </div>
                    <div className={styles.line}></div>
                    <div className='mr-3 ml-3'>
                        <div className={`mb-2 ${styles.text2}`}> User’s Tier</div>
                        <div className='df jc-center'>
                            <img src="/icons/m_star.png" alt="" />
                            <img src="/icons/star.png" alt="" />
                            <img src="/icons/star.png" alt="" />
                        </div>
                    </div>
                    <div className={`${styles.line2} mr-3`}></div>
                    <div className={`${styles.nvcb}`}>
                        <div className={`${styles.text1} mb-1`}>₦{detail.accountBalance}</div>
                        <div className={styles.text2}>{detail.accountNumber}/Providus Bank</div>
                    </div>
                </div>

                <div className={`line-links df jc-space-between overfX`}>
                    <NavLink to='general-details'>General Details</NavLink>
                    <NavLink to='noroute'>Documents</NavLink>
                    <NavLink to='noroute'>Bank Details</NavLink>
                    <NavLink to='noroute'>Loans</NavLink>
                    <NavLink to='noroute'>Savings</NavLink>
                    <NavLink to='noroute'>App and System</NavLink>
                </div>
            </div>

            <div className="card mt-5">
                <Outlet />
            </div>


        </>
    )
}

export default UserDetail