import React, {useState, useEffect} from 'react'
import { useForm } from 'react-hook-form'
import './styles.css'


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
  const handleOptionSelect = (e) => {
    setSelectedOption(e.target.value)
  }


  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
      <form onSubmit={handleSubmit(onSubmit)} className='entryForm'>
      {/* register your input into the hook by invoking the "register" function */}
      {/* include validation with required or other standard HTML validation rules */}
      {/* errors will return when field validation fails  */}

        <label htmlFor='stepOne'>Is the leave of absence for your own injury or illness?</label>
        <div onChange={handleOptionSelect}>
            <input type='radio' id='stepOneTrue' value='stepOneTrue' {...register('stepOne', {required: true})}/>
            <label htmlFor='stepOne'>True</label>
            <br/>
            <input type='radio' id='stepOneFalse' value='stepOneFalse' {...register('stepOne', {required: true})}/>
            <label htmlFor='stepOne'>False</label>
        </div>
        


        





    </form>
  )
}
