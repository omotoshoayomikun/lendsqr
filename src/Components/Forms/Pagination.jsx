import React from 'react'
import styles from '../../Styles/Forms.module.scss'

export default function Pagination() {
  return (
    <>
      <div className="df jc-space-between">
        <div className="df fs-14px  ai-center">
          <div className="mr-1">Showing</div>
          <div className="mr-1">
            <select name="" id="" className={styles.xssel}>
              <option value="">100</option>
              <option value="">50</option>
            </select>
          </div>
          <div className="">out of 100</div>
        </div>
        <div className="">
          <div className='df ai-center'>
            <div className={styles.pag_dir}><img src="/icons/arrow_left.png" alt="" /></div>
            <div className={styles.pag_num}>1</div>
            <div className={styles.pag_num}>2</div>
            <div className={styles.pag_num}>...</div>
            <div className={styles.pag_num}>10</div>
            <div className={styles.pag_num}>20</div>
            <div className={styles.pag_dir}><img src="/icons/arrow_right.png" alt="" /></div>
          </div>
        </div>
      </div>
    </>
  )
}
