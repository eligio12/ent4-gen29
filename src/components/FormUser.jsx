import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import "./styles/FormUser.css"

const FormUser = ({createUser, infoUpdate, updateUsers, setInfoUpdate, setActiveCreate }) => {

    const {handleSubmit, register, reset} = useForm()

    useEffect(() => {
      reset(infoUpdate)
    }, [infoUpdate])

    const submit = data => {
      if(infoUpdate){
        //Update
        updateUsers('/users', infoUpdate.id, data)
        setInfoUpdate()
        setActiveCreate(false)
      } else{
        //Create
        createUser('/users', data)
        setActiveCreate(false)
      }
      

      reset({
        email: "",
        password: "",
        first_name: "",
        last_name: "",
        birthday: ""
      })
    }

    const handleClose = () => {
      setActiveCreate(false)
      
    }
    


  return (
    
      <form className='form' onSubmit={handleSubmit(submit)}>
        <div className='form__close'>
        <h2 className='formuser_title'>{infoUpdate ? "Update" : "New User"}</h2>
        <button onClick={handleClose} className='btn_close'>X</button>
        </div>
        <div className='formuser_group'>
          <label className='formuser_label' htmlFor="email">Email</label>
          <input className='formuser_input' {...register('email')} type="email" id="email" />
        </div>
        <div className='formuser_group'>
          <label className='formuser_label' htmlFor="password">Password</label>
          <input className='formuser_input' {...register('password')} type="password" id="password" />
        </div>
        <div className='formuser_group'>
          <label className='formuser_label' htmlFor="first_name">First name</label>
          <input className='formuser_input' {...register('first_name')} type="text" id="first_name" />
        </div>
        <div className='formuser_group'>
          <label className='formuser_label' htmlFor="last_name">Last name</label>
          <input className='formuser_input' {...register('last_name')} type="text" id="last_name" />
        </div>
        <div className='formuser_group'>
          <label className='formuser_label' htmlFor="birthday">Birthday</label>
          <input className='formuser_input' {...register('birthday')} type="date" id="birthday" />
        </div>
        <button className='formuser_btn'>{infoUpdate ? "Update" : "Create"}</button>
      </form>
  )
}

export default FormUser