import React from 'react'
import { IconError } from '../../assets/icons/error'
import {
  FormControlBox,
  FormControlErrorText,
  FormControlErrorIcon,
  FormCustomErrorBox,
  FormCustomErrorText
} from '../styled/components'

export const FormControl = ({
  name,
  errors,
  label,
  children,
  helperText,
  customError
}) => {
  return (
    <FormControlBox>
      {label && <p>{label}</p>}
      {children}
      {errors[name] ? (
        <>
          <FormControlErrorText>{errors[name].message}</FormControlErrorText>
          <FormControlErrorIcon>
            <IconError />
          </FormControlErrorIcon>
          {customError && (
            <FormCustomErrorBox>
              <FormCustomErrorText>{customError}</FormCustomErrorText>
            </FormCustomErrorBox>
          )}
        </>
      ) : null}
      {!errors[name] && helperText && <p>{helperText}</p>}
    </FormControlBox>
  )
}
