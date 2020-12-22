import React from 'react';
import styled from 'styled-components';

const Input = styled.input.attrs({
    type: 'file',
})`
    display:none;
    
`
const Button = styled.button.attrs ( {

})`
  font: 16px Arial, Helvetica, sans-serif;
  color: #ccc;
  outline: none;
  border: none;
  padding: 6px 12px 6px ;
  height: 36px;
  text-shadow: 1px 1px 0px #000;
  box-shadow: inset 0px 2px 2px rgba(0,0,0,0.5);
  background-color: #3e3e3e;
  background: -webkit-gradient(linear, left top, left bottom, from(#545454), to(#3e3e3e));
  background: -moz-linear-gradient(top, #545454, #3e3e3e);
  border-radius: 5px;
  width:100%;
  margin-top: 10px;
  margin-bottom:20px;
  border: ${({error})=>error ? '1px solid red' : 'none'};`

const Icon = styled.label.attrs({

})``

const CustomFileInput = ({txt, changetxt, setMultiple, error}) => {
  const [showState, setShowState] = React.useState(txt)
  const [flag, setFlag] = React.useState(false)
  
  const fileSelectedHandler = e => {
    const len = e.target.files.length
    setMultiple(e.target.files)
    let result = txt
    if (len > 1) {
      result = len.toString() + changetxt
    } else if (len === 1) {
      result = e.target.files[0].name
    }
    setFlag(true)
    setShowState(result)
  }
  const handleClick = () => {
    document.getElementById("filePicker").click()
  }
  return (
    <div>
                <Input
                    id="filePicker"
                    onChange={fileSelectedHandler}
                    multiple
                />
                <Button onClick={handleClick} error={error}>
                {
                  flag ? <Icon>{showState}</Icon> : <Icon>{txt}</Icon>
                }
                    
                </Button>
            </div>
    )
}
export default CustomFileInput