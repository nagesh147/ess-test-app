import React, {useState, useEffect} from 'react'
import { useForm } from 'react-hook-form'
import './styles.css'
import data from '../../data.json'
import Radio from '../elements/Radio'


export default function EntryForm() {

const [formData, setFormData] = useState(data)
let [orderLevel, setOrderLevel] = useState(1)
const [orderOne, setOrderOne] = useState(formData.filter((i)=> i.order === 1))

  const orderHandler = (order) => {
    console.log('orderLevel-1',orderLevel)
    setOrderLevel(order++)
    const nextOderFormItem = formData.filter((i)=> i.order === 2)
    console.log('entrydorm 222',orderLevel)
    return nextOderFormItem && nextOderFormItem.map(formItem => {
      return (
        <div className='entryForm'>
          <label>{formItem.question}</label>
         { renderElement(formItem, orderLevel) }
        </div>
      )
    })
  }

  const renderElement = (formItem, orderLevel) => {
    console.log('formItem', formItem)
    switch (formItem.dataType) {
      case 'radio':
        return (<Radio 
          formData = {formData}
          formItem = {formItem}
          orderLevel = {orderLevel}
          orderHandler = {orderHandler}
          setOrderLevel = {setOrderLevel}
        />)

      default:
        return
  }
  }

  return orderOne && orderOne.map(formItem => {
    return (
      <div className='entryForm'>
        <label>{formItem.question}</label>
       { renderElement(formItem,orderLevel) }
      </div>
    )
})



}
