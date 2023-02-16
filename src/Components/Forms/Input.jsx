import React from 'react'
import styles from '../../Styles/Forms.module.scss'
import { AiOutlineSearch } from 'react-icons/ai'

export function FormInput(props) {
  const { id, onChange, ...inputprops } = props
  return (
    <>
    <input {...inputprops} onChange={onChange} className={styles.input} />
    </>
  )
}

export function InputSx(props) {
  const { onChange, id, ...inputprops} = props
  return(
    <>
    <input {...inputprops} className={styles.inputsx} />
    </>
  )
}

export function SearchInput({placeholder}) {
  return(
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