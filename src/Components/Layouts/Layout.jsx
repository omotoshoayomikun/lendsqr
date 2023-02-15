import React from 'react'
import Header from './Header'
import SideBar from './SideBar'
import { Outlet } from 'react-router-dom'
import styles from '../../Styles/Layout.module.scss'

function Layout() {
  return (
    <>
    <div className={styles.lay_container}>
      <Header />
      <div className={styles.lay_wrap_body}>
        <SideBar />
        <div className={styles.body_cont}>
          <Outlet />
        </div>
      </div>
    </div>
    </>
  )
}

export default Layout