import React from 'react'
import styles from '../../../Styles/Users.module.scss'
import { DangerOutlinBtn, PriOutlinBtn } from '../../Forms/Btn'
import { NavLink, Outlet, Link } from 'react-router-dom'

function UserDetail() {
    return (
        <>
            <Link to='/admin/users' className='df'>
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

            <div className="card" style={{ paddingBottom: '0px' }}>
                <div className="df ai-center mb-7">
                    <div className={`${styles.round} mr-2`}>
                        <img src="/icons/single_user.png" alt="" />
                    </div>
                    <div className='mr-3'>
                        <div className={`${styles.text1} mb-1`}>Grace Effiom</div>
                        <div className={styles.text2}>LSQFf587g90</div>
                    </div>
                    <div className={styles.line}></div>
                    <div className='mr-3 ml-3'>
                        <div className={styles.text2}> User’s Tier</div>
                        <div></div>
                    </div>
                    <div className={styles.line}></div>
                    <div className='ml-3'>
                        <div className={`${styles.text1} mb-1`}>₦200,000.00</div>
                        <div className={styles.text2}>9912345678/Providus Bank</div>
                    </div>
                </div>

                <div className={`line-links df jc-space-between`}>
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