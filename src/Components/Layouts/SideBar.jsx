import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { BiChevronDown } from 'react-icons/bi'
import styles from '../../Styles/Sidebar.module.scss'
import { businesses, customers, settings } from '../../routes'

function SideBar() {
  return (
    <>
      <div className={styles.side_container}>
        <div className={styles.side_wrap}>
          <Link to='' className={`${styles.nav_link} df ai-center mb-6`}>
            <div className='mr-1 df jc-center ai-center'><img src='/icons/briefcase.png' /></div>
            <div className={`${styles.txt} mr-1`}>Switch Organization</div>
            <div><img src='/icons/down.png' /></div>
          </Link>

          <nav>
            <NavLink to={'dashboard'} className={` df ai-center mb-4`}>
              <div className='mr-1 df jc-center ai-center'><img src='/icons/dashboard.png' /></div>
              <div className={`${styles.txt} mr-1`}>Dashboard</div>
            </NavLink>

            <div className={`${styles.text_side} mb-1`}>
              Customers
            </div>

            {
              customers.map((customer, i) => (
                <NavLink key={i} to={customer.path} className={` df ai-center`}>
                  <div className='mr-1 df jc-center ai-center'><img src={customer.icon} /></div>
                  <div className={`${styles.txt} mr-1`}>{customer.name}</div>
                </NavLink>
              ))
            }


            <div className={`${styles.text_side} mt-4 mb-1`}>
              BUSINESSES
            </div>

            {
              businesses.map((business, i) => (
                <NavLink key={i} to={business.path} className={` df ai-center`}>
                  <div className='mr-1 df jc-center ai-center'><img src={business.icon} /></div>
                  <div className={`${styles.txt} mr-1`}>{business.name}</div>
                </NavLink>
              ))
            }

             
            <div className={`${styles.text_side} mt-4 mb-1`}>
            SETTINGS
            </div>

            {
              settings.map((setting, i) => (
                <NavLink key={i} to={setting.path} className={` df ai-center`}>
                  <div className='mr-1 df jc-center ai-center'><img src={setting.icon} /></div>
                  <div className={`${styles.txt} mr-1`}>{setting.name}</div>
                </NavLink>
              ))
            }

          </nav>

        </div>
      </div>
    </>
  )
}

export default SideBar

