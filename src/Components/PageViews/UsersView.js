import React from 'react'
import Pagination from '../Forms/Pagination'
import Filter from '../Forms/Filter'
import { SmSpinner } from '../Forms/Spinner'
import styles from '../../Styles/Users.module.scss'
import { Card, Card2 } from '../Forms/Card'

function UsersView(props) {
    let {
        setFilter,
        spinner,
        currentPosts,
        status,
        handleComDetails,
        show,
        filter,
        postPerPage,
        details,
        paginate,
        currentPage,
        maxPageNumLimit,
        minPageNumLimit,
        handlePagNext,
        handlePagPrev
    } = props.userProps
  return (
    <>
      <div>
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
          <div className="table-responsive">
            <table className='table p-r'>
              <thead>
                <tr>
                  <th className='cursor' onClick={() => setFilter(!filter)}> organization <img src="/icons/filter.png" alt="" /> </th>
                  <th className='cursor' onClick={() => setFilter(!filter)}> Username <img src="/icons/filter.png" alt="" /> </th>
                  <th className='cursor' onClick={() => setFilter(!filter)}> Email <img src="/icons/filter.png" alt="" /> </th>
                  <th className='cursor' onClick={() => setFilter(!filter)}> Phone number <img src="/icons/filter.png" alt="" /> </th>
                  <th className='cursor' onClick={() => setFilter(!filter)}> Date joined <img src="/icons/filter.png" alt="" /> </th>
                  <th className='cursor' onClick={() => setFilter(!filter)}>Status <img src="/icons/filter.png" alt="" /> </th>

                </tr>
              </thead>
              <tbody>

                {
                  spinner === true ? (
                    <tr>
                      <td colSpan={6}>
                        <SmSpinner />
                      </td>
                    </tr>
                  ) : (
                    currentPosts.map(detail => (
                      <tr key={detail.id} className='p-r'>
                        <td>{detail.orgName.split('-').shift()}</td>
                        <td>{detail.userName}</td>
                        <td>{detail.email}</td>
                        <td>{detail.phoneNumber.split('x').shift()}</td>
                        <td>{detail.createdAt.split('.').shift()}</td>
                        <td>
                          {
                            status(detail.lastActiveDate) <= 2003 && <div className="badge" style={{ backgroundColor: 'rgba(84, 95, 125, 0.06)', color: '#545F7D' }}>Inactive</div>
                          }
                          {
                            status(detail.lastActiveDate) >= 2004 && status(detail.lastActiveDate) <= 2022 && <div className="badge" style={{ backgroundColor: 'rgba(233, 178, 0, 0.1)', color: '#E9B200' }}>Pending</div>
                          }
                          {
                            status(detail.lastActiveDate) >= 2023 && <div className="badge" style={{ backgroundColor: 'rgba(57, 205, 98, 0.06)', color: '#39CD62' }}>Active</div>
                          }
                        </td>
                        <td>
                          <div className={styles.cclxx} style={{ display: 'block' }} onClick={() => handleComDetails(detail.id)}>
                            <img src="/icons/dot.png" alt="" />
                          </div>
                          {
                            show.id === detail.id && show.show === true ? (
                              <div className={styles.card2}>
                                <Card2 id={detail.id} />
                              </div>
                            ) : ''
                          }
                        </td>
                      </tr>
                    ))
                  )
                }



              </tbody>
            </table>
          </div>
          {
            filter && <Filter />
          }

        </div>


        <div className="mt-2">
          <Pagination
            postsPerPage={postPerPage}
            totalPosts={details.length}
            paginate={paginate}
            currentPage={currentPage}
            maxPageNumLimit={maxPageNumLimit}
            minPageNumLimit={minPageNumLimit}
            handlePagNext={handlePagNext}
            handlePagPrev={handlePagPrev}
          />
        </div>
      </div>
    </>
  )
}

export default UsersView