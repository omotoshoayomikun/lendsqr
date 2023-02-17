import React from 'react'
import styles from '../../Styles/Forms.module.scss'
import { AiOutlineSearch } from 'react-icons/ai'

export function FormInput(props) {
  const { id, onChange, pass_change, handleToggleDis, ...inputprops } = props
  return (
    <>
      <div className="p-r">
        <input {...inputprops} onChange={onChange} className={styles.input} />
        <div onClick={handleToggleDis} className={styles.pass_dis}>{pass_change}</div>
      </div>
    </>
  )
}

export function InputSx(props) {
  const { onChange, id, ...inputprops } = props
  return (
    <>
      <input {...inputprops} className={styles.inputsx} onChange={onChange} />
    </>
  )
}

export function SearchInput({ placeholder }) {
  return (
    <>
      <div className={`df`}>
        <input type="text" className={styles.group_input} placeholder={placeholder} />
        <div className={styles.input_g_btn}>
          <AiOutlineSearch />
        </div>
      </div>
    </>
  )
}