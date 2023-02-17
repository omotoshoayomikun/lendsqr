import React, { useEffect, useState } from 'react'
import styles from '../../../Styles/Users.module.scss'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Spinner } from '../../Forms/Spinner'

function GeneralDetails() {

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
            <div className='overfX'>
                <div className={`${styles.text3} mb-4`}>Personal Information</div>
                <div className="df jc-space-between">
                    <div className='mr-4'>
                        <div className={`mb-4`}>
                            <div className={`${styles.text4} text-tran mb-1`}>full Name</div>
                            <div className={`${styles.text3}`}>{detail.profile.firstName + ' ' + detail.profile.lastName}</div>
                        </div>
                        <div className={`mb-4`}>
                            <div className={`${styles.text4} text-tran mb-1`}>Marital status</div>
                            <div className={`${styles.text3}`}>{detail.marital}</div>
                        </div>
                    </div>
                    <div className='mr-4'>
                        <div className={`mb-4`}>
                            <div className={`${styles.text4} text-tran mb-1`}>Phone Number</div>
                            <div className={`${styles.text3}`}>{detail.phoneNumber}</div>
                        </div>
                        <div className={`mb-4`}>
                            <div className={`${styles.text4} text-tran mb-1`}>Children</div>
                            <div className={`${styles.text3}`}>{detail.children}</div>
                        </div>
                    </div>
                    <div className='mr-4'>
                        <div className={`mb-4`}>
                            <div className={`${styles.text4} text-tran mb-1`}>Email Address</div>
                            <div className={`${styles.text3}`}>{detail.email}</div>
                        </div>
                        <div className={`mb-4`}>
                            <div className={`${styles.text4} text-tran mb-1`}>Type of residence</div>
                            <div className={`${styles.text3}`}>{detail.residence}</div>
                        </div>
                    </div>
                    <div className='mr-4'>
                        <div className={`mb-4`}>
                            <div className={`${styles.text4} text-tran mb-1`}>Bvn</div>
                            <div className={`${styles.text3}`}>{detail.profile.bvn}</div>
                        </div>
                    </div>
                    <div>
                        <div className={`mb-4`}>
                            <div className={`${styles.text4} text-tran mb-1`}>Gender</div>
                            <div className={`${styles.text3}`}>{detail.profile.gender}</div>
                        </div>
                    </div>
                </div>
                <hr className='hr' />

                <div className={`${styles.text3} mb-4  mt-5`}>Education and Employment</div>
                <div className="df jc-space-between">
                    <div className='mr-4'>
                        <div className={`mb-4`}>
                            <div className={`${styles.text4} text-tran mb-1`}>level of education</div>
                            <div className={`${styles.text3}`}>{detail.education.level}</div>
                        </div>
                        <div className={`mb-4`}>
                            <div className={`${styles.text4} text-tran mb-1`}>office email</div>
                            <div className={`${styles.text3}`}>{detail.education.officeEmail}</div>
                        </div>
                    </div>
                    <div className='mr-4'>
                        <div className={`mb-4`}>
                            <div className={`${styles.text4} text-tran mb-1`}>employment status</div>
                            <div className={`${styles.text3}`}>{detail.education.employmentStatus}</div>
                        </div>
                        <div className={`mb-4`}>
                            <div className={`${styles.text4} text-tran mb-1`}>Monthly income</div>
                            <div className={`${styles.text3}`}>{'₦' + detail.education.monthlyIncome[0] + ' ' + '-' + ' ' + '₦' + detail.education.monthlyIncome[1]}</div>
                        </div>
                    </div>
                    <div className='mr-4'>
                        <div className={`mb-4`}>
                            <div className={`${styles.text4} text-tran mb-1`}>sector of employment</div>
                            <div className={`${styles.text3}`}>{detail.education.sector}</div>
                        </div>
                        <div className={`mb-4`}>
                            <div className={`${styles.text4} text-tran mb-1`}>loan repayment</div>
                            <div className={`${styles.text3}`}>{detail.education.loanRepayment}</div>
                        </div>
                    </div>
                    <div>
                        <div className={`mb-4`}>
                            <div className={`${styles.text4} text-tran mb-1`}>Duration of employment</div>
                            <div className={`${styles.text3}`}>{detail.education.duration}</div>
                        </div>
                    </div>
                </div>
                <hr className='hr' />

                <div className={`${styles.text3} mb-4  mt-5`}>Socials</div>
                <div className="df jc-space-between">
                    <div className='mr-4'>
                        <div className={`mb-4`}>
                            <div className={`${styles.text4} text-tran mb-1`}>Twitter</div>
                            <div className={`${styles.text3}`}>{detail.socials.twitter}</div>
                        </div>
                    </div>
                    <div className='mr-4'>
                        <div className={`mb-4`}>
                            <div className={`${styles.text4} text-tran mb-1`}>Facebook</div>
                            <div className={`${styles.text3}`}>{detail.socials.facebook}</div>
                        </div>
                    </div>
                    <div>
                        <div className={`mb-4`}>
                            <div className={`${styles.text4} text-tran mb-1`}>Instagram</div>
                            <div className={`${styles.text3}`}>{detail.socials.instagram}</div>
                        </div>
                    </div>
                    <div></div>
                </div>
                <hr className='hr' />

                <div className={`${styles.text3} mb-4  mt-5`}>Guarantor</div>
                <div className="df jc-space-between">
                    <div className='mr-4'>
                        <div className={`mb-4`}>
                            <div className={`${styles.text4} text-tran mb-1`}>full Name</div>
                            <div className={`${styles.text3}`}>{detail.guarantor.firstname + ' ' + detail.guarantor.lastName}</div>
                        </div>
                    </div>
                    <div className='mr-4'>
                        <div className={`mb-4`}>
                            <div className={`${styles.text4} text-tran mb-1`}>Phone Number</div>
                            <div className={`${styles.text3}`}>{detail.guarantor.phoneNumber}</div>
                        </div>
                    </div>
                    <div className='mr-4'>
                        <div className={`mb-4`}>
                            <div className={`${styles.text4} text-tran mb-1`}>Email Address</div>
                            <div className={`${styles.text3}`}>{detail.guarantor.email}</div>
                        </div>
                    </div>
                    <div>
                        <div className={`mb-4`}>
                            <div className={`${styles.text4} text-tran mb-1`}>Relationship</div>
                            <div className={`${styles.text3}`}>{detail.guarantor.relationship}</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GeneralDetails