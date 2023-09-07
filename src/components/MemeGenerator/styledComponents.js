import styled from 'styled-components'

export const LabelElement = styled.label`
  color: #1e293b;
  font-size: 18px;
`
export const Heading = styled.h1`
  color: #0b69ff;
  font-size: 30px;
  font-weight: bold;
  font-family: 'Roboto';
  margin-bottom: 25px;
`

export const InputElement = styled.input`
  border: 1px solid #5a7184;
  border-radius: 8px;
  margin-bottom: 18px;
`
export const Button = styled.button`
  background-color: #0b69ff;
  color: #ffffff;
  padding: 10px;
  border-radius: 8px;
  margin-top: 10px;
`
export const MemeContainer = styled.div`
  background-color: #d7dfe9;
  box-shadow: 0px 0px 0px 1px #5a7184;
  min-height: 100vh;
  padding: 20px;
`
export const MemeTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80%;
`
export const SelectContainer = styled.select`
  border: 1px solid #5a7184;
  padding: 10px;
  border-radius: 8px;
`
export const OptionElement = styled.option`
  font-size: 18px;
  color: #1e293b;
  font-family: 'Roboto';
`
export const DisplayContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url(${props => props.backgroundImage})
  background-size:cover;
`
export const TextElement = styled.h1`
  color: #ffffff;
  font-size: ${props => props.activeFontSizeId}px;
  font-family: 'Roboto';
  font-weight: bold;
  align-self: ${props => (props.outline ? 'flex-start' : 'flex-end')};
`
