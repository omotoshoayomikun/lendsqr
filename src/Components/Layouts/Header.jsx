import React, { useState } from 'react'
import styles from '../../Styles/Header.module.scss'
import { SearchInput } from '../Forms/Input'
import { TfiBell } from 'react-icons/tfi'
import { FaCaretDown } from 'react-icons/fa'
import { AiOutlineMenu } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { handleSlide } from '../../redux/sidebarSlice'

function Header() {

  const [view, setView] = useState(true)


  const dispatch = useDispatch()
  const selector = useSelector(state => state.sidebar.bar)

  const handSidebar = () => {
    setView(!view)
    dispatch(handleSlide(view))
  }

  return (
    <>
      <div className={styles.head_container}>
        <div className={styles.headdis_Lg}>
          <div className="">
            <img src="/images/logo.png" alt="logo" className={`${styles.log_logo}`} />
          </div>
          <div className="" style={{ width: '400px' }}>
            <SearchInput placeholder='Search for anything' />
          </div>
          <div></div>
          <div className="df ai-center">
            <div className={`${styles.text1} mr-5 cursor`}>Docs</div>
            <div className='df jc-center mr-5'><TfiBell size={20} fontWeight='bold' color='#213F7D' /></div>
            <div className="mr-3 cursor">
              <img src="/images/avater.png" className={`${styles.avater} ${styles.round}`} alt="" />
            </div>
            <div className={`${styles.text2} df jc-center ai-center cursor`}>
              <div className='mr-1'>Adedeji</div>
              <div> <FaCaretDown style={{ marginTop: '0px' }} size={12} /></div>
            </div>
          </div>
        </div>
      </div>
      {/* HEADER FOR SMALL SCREEN */}
      <div className={styles.head_container_sm}>
        <div className="">
          <img src="/images/logo.png" alt="logo" className={`${styles.log_logo}`} />
        </div>
        <div className={styles.serSM}>
          <SearchInput placeholder='Search for anything' />
        </div>
        <div className="" onClick={handSidebar}>
          <AiOutlineMenu size={30} color='#213F7D' />
        </div>
      </div>
    </>
  )
}

export default Header