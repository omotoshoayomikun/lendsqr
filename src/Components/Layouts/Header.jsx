import React from 'react'
import styles from '../../Styles/Header.module.scss'
import { SearchInput } from '../Forms/Input'
import { TfiBell } from 'react-icons/tfi'
import { FaCaretDown } from 'react-icons/fa'

function Header() {
  return (
    <>
      <div className={styles.head_container}>
        <div className="">
          <img src="/images/logo.png" alt="logo" className={`${styles.log_logo}`} />
        </div>
        <div className="">
          <SearchInput />
        </div>
        <div className="df ai-center">
          <div className={`${styles.text1} mr-5`}>Docs</div>
          <div className='df jc-center mr-5'><TfiBell size={20} fontWeight='bold' color='#213F7D' /></div>
          <div className="mr-3">
              <img src="/images/avater.png" className={`${styles.avater} ${styles.round}`} alt="" />
          </div>
          <div className={`${styles.text2} df jc-center ai-center`}>
            <div className='mr-1'>Adedeji</div>
            <div> <FaCaretDown style={{marginTop: '0px'}} size={12} /></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header