import styled from 'styled-components';

 export const ImgContainer = styled.div`
  background: transparent url(/static/images/striped_bg.gif) repeat center top;
  background-size: cover;
  border: 1px solid;
  height: 0;
  padding-bottom: 60%;
  overflow: auto;
`

export const CardForm = styled.div`
  border: 3px solid #343434;
  `

export const CardHeader = styled.div`
    height: 50px;
    line-height: 46px;
    padding-left: 25px;
    font-size: 16px;
    color: #fefefe;
    font-weight: 300;
    font-family: 'Titillium Web', Arial, Helvetica, sans-serif;
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: transparent url(/static/images/title_bar_bg.png) repeat-x center center;
    text-align:left;
`
export const CardBody = styled.div`
  background-color:black;
  padding: 10px 10px 10px 10px;
  background: url(/static/images/striped_bg.gif) repeat;
`

export const Label = styled.div`
  font: 14px Arial, Helvetica, sans-serif;
  font-weight: bold;
  color: #999;  
  font-size: 14px;
  color: #4d4d4d;
  cursor: pointer;
  display: block;
  font-weight: 500;
  margin-bottom: 3px;
  text-align: left;
  `

export const Input = styled.input`
  font: 16px Arial, Helvetica, sans-serif;
  color: #ccc;
  outline: none;
  border: none;
  height: 36px;
  text-shadow: 1px 1px 0px #000;
  -webkit-box-shadow: inset 0px 2px 2px rgba(0,0,0,0.5);
  -moz-box-shadow: inset 0px 2px 2px rgba(0,0,0,0.5);
  box-shadow: inset 0px 2px 2px rgba(0,0,0,0.5);
  background-color: #3e3e3e;
  background: -webkit-gradient(linear, left top, left bottom, from(#545454), to(#3e3e3e));
  background: -moz-linear-gradient(top, #545454, #3e3e3e);
  border-radius: 5px;
  font-size: 20px
  padding-left: 3px;
  display: block;
  width:100%;
  margin-top: 10px;
  margin-bottom:20px;
  transition: all 0.15s linear;
  -webkit-appearance: textfield;
  background-color: white;
  -webkit-rtl-ordering: logical;
  cursor: text;  


`;

export const Button = styled.button`
  padding: 1px 15px 2px 15px;
  min-height: 25px;
  color: white;
  font-family: Arial;
  font-size: 13px;
  font-family: 'Titillium Web', Arial, Helvetica, sans-serif;
  font-weight: 500;
  text-decoration: none;
  text-transform: uppercase;
  border-radius: 50px;
  text-shadow: 1px 1px 0px #1a355f;
  box-shadow: 1px 1px 3px rgba(0,0,0,0.5), inset 0 0 16px rgba(0,0,0,0.5);
  border: none;
  border-top: 1px solid rgba(255,255,255,0.3);
  border-bottom: 1px solid rgba(0,0,0,0.5);
  background: #2c507a;
  background: -moz-linear-gradient(top, #2c507a 0%, #395f89 50%, #2c507a 50%, #305681 100%);
  background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, #2c507a), color-stop(50%, #395f89), color-stop(50%, #2c507a), color-stop(100%, #305681));
  background: -webkit-linear-gradient(top, #2c507a 0%, #395f89 50%, #2c507a 50%, #305681 100%);
  background: -o-linear-gradient(top, #2c507a 0%, #395f89 50%, #2c507a 50%, #305681 100%);
  background: -ms-linear-gradient(top, #2c507a 0%, #395f89 50%, #2c507a 50%, #305681 100%);
  background: linear-gradient(to bottom, #2c507a 0%,#395f89 50%,#2c507a 50%,#305681 100%);
  white-space: nowrap; 
  outline: none;
  &:hover {
    cursor: pointer;
    background: #4d7cb3;
  }
`;

export const InnerContainer = styled.div`
  width:90%;
  background: transparent url(/static/images/textile_texture_bg.gif) repeat center top;
`
export const Select = styled.select.attrs({
})`
  background-color: #3e3e3e;
  font: 16px Arial, Helvetica, sans-serif;
  color: #ccc;
  outline: none;
  border: none;
  padding: 2px 12px;
  height: 36px;
  text-shadow: 1px 1px 0px #000;  
  box-shadow: inset 0px 2px 2px rgba(0,0,0,0.5);  
  border-radius: 5px;
  width: 100%;
  text-transform: none;
  box-sizing: border-box;
  align-items: center;
  white-space: pre;
  cursor: default;

  margin-top: 10px;
  margin-bottom:20px;
  `
 export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;`
export const FormContainer = styled.div`
  flex: 0 0 100%;
  max-width: 100%;
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
`
export const HalfColFirst = styled.div`
  flex: 0 0 50%;
  max-width: 50%;
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  @media only screen and (max-width: 768px) {
  /* For mobile phones: */
    max-width: 100%;
    flex: 0 0 100%;
  }
`
export const HalfColSecond = styled.div`
  flex: 0 0 50%;
  max-width: 50%;
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  @media only screen and (max-width: 768px) {
  /* For mobile phones: */
    max-width: 100%;
    flex: 0 0 100%;
  }
`
export const Textarea = styled.textarea`
  height: 150px;
  padding: 12px 12px;
  font: 16px Arial, Helvetica, sans-serif;
  color: #ccc;
  outline: none;
  border: none;
  text-shadow: 1px 1px 0px #000;
  box-shadow: inset 0px 2px 2px rgba(0,0,0,0.5);
  background-color: #3e3e3e;
  background: -webkit-gradient(linear, left top, left bottom, from(#545454), to(#3e3e3e));
  background: -moz-linear-gradient(top, #545454, #3e3e3e);
  border-radius: 5px;  
  display: block;
  width:100%;
  overflow: auto;
  vertical-align: top;  
  
  margin-top:10px;
  margin-bottom:20px;
  `
export const MultiUpload = styled.input.attrs({
  type: 'file',
  // className: 'custom-file-input form-control',
})`
  position: relative;
  z-index: 2;
  width: 100%;
  height: calc(1.5em + .75rem + 2px);
  margin: 0;
  opacity: 0;
  margin-bottom:20px;
  background-color: #3e3e3e;
`