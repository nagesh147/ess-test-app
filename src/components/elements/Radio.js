import React, {useState, useEffect} from 'react'
import { useForm } from 'react-hook-form'

const Radio = ({ formItem, formData, orderHandler, orderLevel, setOrderLevel}) => {
 
    const [selectedOption, setselectedOption] = useState(null)
    const {
        register,
      } = useForm()

    return (
        <>
        <div onChange={(e)=>{ 
                alert(orderLevel)
                setselectedOption(e.target.value)
                setOrderLevel(2)
                console.log('orderLevel during ', orderLevel)
            }}>
            <input type={formItem.dataType} className='mbt5' value={formItem.dataTypeValue.split(',')[0]} {...register('orderOne', {required: formItem.isRequired})}/>
            <label>{formItem.dataTypeValue.split(',')[0]}</label>
            <br/>
            <input type={formItem.dataType} className='mbt5' value={formItem.dataTypeValue.split(',')[1]} {...register('orderOne', {required: formItem.isRequired})}/>
            <label>{formItem.dataTypeValue.split(',')[1]}</label>
        </div>
        {selectedOption === 'Yes' && orderHandler(orderLevel) && orderLevel }
        {selectedOption === 'Injury' && orderHandler(orderLevel) }
        </>
        
    )
}

export default Radio
