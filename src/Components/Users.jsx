import React, { useEffect, useState } from 'react'
import styles from '../Styles/Dashboard.module.scss'
import { Card, Card2 } from './Forms/Card'
import Pagination from './Forms/Pagination'
import Filter from './Forms/Filter'
import axios from 'axios'

function Users() {


  const [details, setDetails] = useState([])
  const [show, setShow] = useState(false)
  const [filter, setFilter] = useState(false)

  useEffect(() => {
    const getDetails = async () => {
      try {
        const res = await axios.get(`https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users`)
        setDetails(res.data)
      } catch (err) {
        console.log(err)
      }

    }

    getDetails()
  }, [])

  const handleComDetails = () => {
    setShow(!show)
  }


  return (
    <>
      <div className='mb-7'>
        <div className={styles.text_h}>Users</div>
        <div className={styles.card_control}>
          <div className={styles.card_cont}>
            <Card icon='user_p' detail='users' quantity='2,453' bgColor='rgba(223, 24, 255, 0.1)' />
          </div>
          <div className={styles.card_cont}>
            <Card icon='Group_user' detail='Active Users' quantity='2,453' bgColor='rgba(87, 24, 255, 0.1)' />
          </div>
          <div className={styles.card_cont}>
            <Card icon='file' detail='Users with Loans' quantity='12,453' bgColor='rgba(245, 95, 68, 0.1)' />
          </div>
          <div className={styles.card_cont}>
            <Card icon='coin' detail='Users with Savings' quantity='102,453' bgColor='rgba(255, 51, 102, 0.1)' />
          </div>
        </div>
      </div>

      <div className='card'>
        <table className='table'>
          <thead>
            <tr>
              <th onClick={() => setFilter(!filter)}> organization <img src="/icons/filter.png" alt="" /> </th>
              <th onClick={() => setFilter(!filter)}> Username <img src="/icons/filter.png" alt="" /> </th>
              <th onClick={() => setFilter(!filter)}> Email <img src="/icons/filter.png" alt="" /> </th>
              <th onClick={() => setFilter(!filter)}> Phone number <img src="/icons/filter.png" alt="" /> </th>
              <th onClick={() => setFilter(!filter)}> Date joined <img src="/icons/filter.png" alt="" /> </th>
              <th onClick={() => setFilter(!filter)}>Status <img src="/icons/filter.png" alt="" /> </th>

            </tr>
          </thead>
          <tbody>
            {
              details.map(detail => (
                <tr key={detail.id} className='p-r'>
                  <td>{detail.orgName.split('-').shift()}</td>
                  <td>{detail.userName}</td>
                  <td>{detail.email}</td>
                  <td>{detail.phoneNumber.split('x').shift()}</td>
                  <td>{detail.createdAt.split('.').shift()}</td>
                  <td>
                    <div className="badge">
                      Inactive
                    </div>
                  </td>
                  <td>
                    <div className={styles.cclxx} onClick={handleComDetails}>
                      <img src="/icons/dot.png" alt="" />
                    </div>
                  </td>
                </tr>
              ))
            }

          </tbody>
        </table>
        {
          show && <div className={styles.card2}><Card2 /></div>
        }
        {
          filter &&  <Filter />
        }
       
      </div>


      <div className="">
        <Pagination />
      </div>

    </>
  )
}

export default Users