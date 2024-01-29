// @ts-nocheck
import styled from 'styled-components'

export const Form = styled.form`
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 8px 0px 0px rgba(0, 0, 0, 0.15);
  min-height: 474px;
`

export const Input = styled.input`
  height: 56px;
  padding: 15px 32px;
  border-radius: 5px;
  background: #fff;
  border: ${props =>
    `2px solid ${props.error ? props.theme.errorColor : props.theme.border}`};
  &:focus {
    border: 1px solid #5e54a4;
  }
`

export const FormControlBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 6px;
`

export const FormControlErrorText = styled.p`
  color: #ff7979;
  text-align: right;
  font-size: 11px;
  font-style: italic;
  font-weight: 500;
  line-height: normal;
`

export const FormControlErrorIcon = styled.div`
  position: absolute;
  top: 16px;
  right: 27px;
`

export const FormCustomErrorBox = styled.div`
  position: absolute;
  left: 32px;
  top: 16px;
  background-color: #fff;
`

export const FormCustomErrorText = styled.p`
  color: #ff7979;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 26px;
  letter-spacing: 0.25px;
`
