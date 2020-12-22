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

const SimpleImageInput = ({txt, setImage, error, err_txt}) => {
  let text = txt
  const [showState, setShowState] = React.useState(txt)
  const [flag, setFlag] = React.useState(false)
  let err = error
  const fileSelectedHandler = e => {
  	const file_type = e.target.files[0].type
  	if (file_type === 'image/png' || file_type === 'image/jpg' || file_type === 'image/jpeg') {
  		setImage(e.target.files[0])
	    setFlag(true)
	    setShowState(e.target.files[0].name)
  	} else {
  		err = true
  		text = err_txt
  	}
    
  }
  const handleClick = () => {
    document.getElementById("filePicker").click()
  }
  return (
    <div>
                <Input
                    id="filePicker"
                    onChange={fileSelectedHandler}
                />
                <Button onClick={handleClick} error={err}>
                {
                  flag ? <Icon>{showState}</Icon> : <Icon>{text}</Icon>
                }
                    
                </Button>
            </div>
    )
}
export default SimpleImageInput