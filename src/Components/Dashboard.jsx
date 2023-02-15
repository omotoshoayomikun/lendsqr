import React from 'react'
import styles from '../Styles/Dashboard.module.scss'
import { Card } from './Forms/Card'
import Pagination from './Forms/Pagination'
import Filter from './Forms/Filter'
function Dashboard() {
  return (
    <>
      <div className='mb-7'>
        <div className={styles.text_h}>Users</div>
        <div className={styles.card_control}>
          <div className={styles.card_cont}>
            <Card icon='user_p' detail='user' quantity='2,453' bgColor='rgba(223, 24, 255, 0.1)' />
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
              <th> organization <img src="/icons/filter.png" alt="" /> </th>
              <th> Username <img src="/icons/filter.png" alt="" /> </th>
              <th> Email <img src="/icons/filter.png" alt="" /> </th>
              <th> Phone number <img src="/icons/filter.png" alt="" /> </th>
              <th> Date joined <img src="/icons/filter.png" alt="" /> </th>
              <th>Status <img src="/icons/filter.png" alt="" /> </th>
            </tr>
          </thead>
          <Filter />
          <tbody>
            <tr>
              <td>Lendsqr</td>
              <td>Adedeji</td>
              <td>adedeji@lendsqr.com</td>
              <td>08078903721</td>
              <td>May 15, 2020 10:00 AM</td>
              <td>
                <div className="badge">
                  Inactive
                </div>
              </td>
              <td>
                <img src="/icons/dot.png" alt="" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>


      <div className="">
        <Pagination />
      </div>

    </>
  )
}

export default Dashboard