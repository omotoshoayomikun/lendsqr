import React from 'react'
import '../../Styles/Forms.scss'

function FormInput(props) {
  const { id, onChange, ...inputprops } = props
  return (
    <>
    <input {...inputprops} onChange={onChange} className='input' />
    </>
  )
}

export default FormInput