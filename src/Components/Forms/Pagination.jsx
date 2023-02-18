import React from 'react'
import styles from '../../Styles/Forms.module.scss'

export default function Pagination({ postsPerPage, totalPosts, paginate, currentPage, maxPageNumLimit, minPageNumLimit, handlePagNext, handlePagPrev }) {

  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i)
  }
  //   let pageIncrementBtn = null;
  //   if(pageNumbers.length > maxPageNumLimit) {
  // pageIncrementBtn = 
  //   }
  //   let pageDecrementBtn = null;


console.log(currentPage)

  return (
    <>
      <div className="df jc-space-between flex-wrap">
        <div className={`df fs-14px ai-center ${styles.lilo} mb-3`}>
          <div className="mr-1">Showing</div>
          <div className="mr-1">
            <select name="" id=""  onChange={(e) => paginate(e.target.value)} className={styles.xssel}>
              {
                pageNumbers.map((number, i) => (
                  <option key={i} selected={currentPage === number && true} value={number}>{number}</option>
                ))
              }

            </select>
          </div>
          <div className="">out of {pageNumbers.length}</div>
        </div>
        <div className={`${styles.lilo} mb-3`}>
          <div className='df ai-center'>
            <div className={styles.pag_dir} onClick={() => handlePagPrev(pageNumbers)}><img src="/icons/arrow_left.png" alt="" /></div>
            {
              pageNumbers.map((number, i) => {
                if (number < maxPageNumLimit + 1 && number > minPageNumLimit) {
                  return (
                    <div key={i} className={`${styles.pag_num}  ${currentPage === number ? styles.active_pag_num:'' }`}  onClick={() => paginate(number)}>{number}</div>
                  )
                } else {
                  return null
                }
              })
            }
            <div className={styles.pag_dir} onClick={() => handlePagNext(pageNumbers)}><img src="/icons/arrow_right.png" alt="" /></div>
          </div>
        </div>
      </div>
    </>
  )
}
