import React from 'react'
import { useForm } from 'react-hook-form'
import { TextField } from '../global/inputs/textfield'
import { Form } from '../global/styled/components'
import { emailRegex, requiredField } from '../global/validations'
import './main-form.css'

export const MainForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch
  } = useForm()

  const onSubmit = form => {
    console.log(form)
  }

  const email = watch('email')

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        control={control}
        errors={errors}
        name='firstName'
        placeholder='First Name'
        type='text'
        registerOptions={{
          required: requiredField('First Name')
        }}
      />
      <TextField
        control={control}
        errors={errors}
        name='lastName'
        placeholder='Last Name'
        type='text'
        registerOptions={{
          required: requiredField('Last Name')
        }}
      />
      <TextField
        control={control}
        errors={errors}
        name='email'
        placeholder='Email'
        type='text'
        customError={email === '' ? 'email@example/com' : ''}
        registerOptions={{
          pattern: {
            value: emailRegex,
            message: 'Looks like this is not an email'
          },
          required: requiredField('Email')
        }}
      />
      <TextField
        control={control}
        errors={errors}
        name='password'
        placeholder='Password'
        type='password'
        registerOptions={{
          required: requiredField('Password')
        }}
      />
      <button type='submit' className='form-submit-btn'>
        {isSubmitting ? 'loading...' : 'CLAIM YOUR FREE TRIAL'}
      </button>
    </Form>
  )
}
