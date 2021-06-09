import React, {useState, useEffect} from 'react'
import { useForm } from 'react-hook-form'
import './styles.css'
import data from '../../data.json'

export default function EntryForm() {
  
  const { register } = useForm()

  const getNextFormItem = (formItemOrder = 0) => {
    formItemOrder++
    console.log('formItemOrder',formItemOrder)
    return renderElements(data.filter((i) => i.order === formItemOrder))
  }

  const renderElements = (el) => {
        console.log('JSON data', el)
        return el.map(formItem => {
            return (
              <div>
                <label>{formItem.question}</label>
                {formItem.dataType === 'radio' ?
                  <div onChange= {(e) => {e.target.value === 'Yes' && getNextFormItem(formItem.order)}
                  }>
                    <input type={formItem.dataType} className='mbt5' value={formItem.dataTypeValue.split(',')[0]} {...register('orderOne', {required: formItem.isRequired})}/>
                    <label>{formItem.dataTypeValue.split(',')[0]}</label>
                    <br/>
                    <input type={formItem.dataType} className='mbt5' value={formItem.dataTypeValue.split(',')[1]} {...register('orderOne', {required: formItem.isRequired})}/>
                    <label>{formItem.dataTypeValue.split(',')[1]}</label>
                  </div>
                  :
                  <input type={formItem.dataType} className='mbt5'  {...register('orderOne', {required: formItem.isRequired})}/>
                }
              </div>
            )
        })
  }

  return (
      <form className='entryForm'>
       {getNextFormItem()}
    </form>
  )
}
