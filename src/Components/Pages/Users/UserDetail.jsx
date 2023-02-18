import React, { useEffect, useState } from 'react'
import styles from '../../../Styles/Users.module.scss'
import { DangerOutlinBtn, PriOutlinBtn } from '../../Forms/Btn'
import { NavLink, Outlet, Link, useParams } from 'react-router-dom'
import axios from 'axios'
import { Spinner } from '../../Forms/Spinner'
import UserDetailsView from '../../PageViews/UserDetailsView'

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
            <UserDetailsView detail={detail} />

            <div className="card mt-5">
                <Outlet />
            </div>


        </>
    )
}

export default UserDetail