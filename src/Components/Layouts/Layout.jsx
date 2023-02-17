import React from 'react'
import Header from './Header'
import SideBar from './SideBar'
import { Outlet } from 'react-router-dom'
import styles from '../../Styles/Layout.module.scss'
import { useSelector } from 'react-redux'

function Layout() {

  const selector = useSelector(state => state.sidebar.bar)

  return (
    <>
      <div className={styles.lay_container}>
        <Header />
        <div className={styles.lay_wrap_body}>
          <div className={styles.sideLg}>
            <SideBar />
          </div>
          {/* SMALL SCREEN FOR SIDEBAR */}
          <div className={styles.sideXs} style={{ left: selector ? '-271px' : '0px' }}>
            <SideBar />
          </div>
           {selector? '': <div className={styles.blackout}></div> }  
          <div className={styles.body_cont}>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  )
}

export default Layout