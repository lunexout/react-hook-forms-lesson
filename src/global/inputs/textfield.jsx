import React, { useState } from 'react'
import { FormControl } from '../form-control'
import { Input } from '../styled/components'

export const TextField = ({
  name,
  placeholder,
  type,
  errors,
  control,
  registerOptions,
  label = '',
  helperText = '',
  customError = ''
}) => {
  const [focused, setFocused] = useState(false)

  return (
    <FormControl
      customError={focused ? '' : customError}
      helperText={helperText}
      name={name}
      errors={errors}
      label={label}
    >
      <Input
        type={type}
        error={Boolean(errors[name])}
        placeholder={placeholder}
        onFocus={() => setFocused(true)}
        {...control.register(name, registerOptions)}
      />
    </FormControl>
  )
}
