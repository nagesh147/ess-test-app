import React, {useState, useEffect} from 'react'
import { useForm } from 'react-hook-form'
import './styles.css'
import data from '../../data.json'

export default function EntryForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const [selectedOption, setSelectedOption] = useState(null)

  useEffect(() => {
    console.log(selectedOption)
  }, [selectedOption])

  const onSubmit = (data) => console.log(data)

  console.log(watch('example')) // watch input value by passing the name of it

  const renderForm = (e) => {

        return data.map(formItem => {
            return (
              <div>
                <label>{formItem.question}</label>
                {formItem.dataType === 'radio' ?
                  <div>
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
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
      <form onSubmit={handleSubmit(onSubmit)} className='entryForm'>
      {/* register your input into the hook by invoking the "register" function */}
      {/* include validation with required or other standard HTML validation rules */}
      {/* errors will return when field validation fails  */}

        <label htmlFor='stepOne'>Is the leave of absence for your own injury or illness?</label>
        <div onChange={(e)=>{ setSelectedOption(e.target.value)}} className='mbt5'>
            <input type='radio' id='stepOneTrue' className='mbt5' value='true' {...register('stepOne', {required: true})}/>
            <label htmlFor='stepOne'>True</label>
            <br/>
            <input type='radio' id='stepOneFalse' className='mbt5' value='false' {...register('stepOne', {required: true})}/>
            <label htmlFor='stepOne'>False</label>
        </div>
        {selectedOption === 'true' && renderForm()}
        


        





    </form>
  )
}
