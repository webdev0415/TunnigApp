import styled from 'styled-components'
import media from "styled-media-query";

export const CardForm = styled.div.attrs({

})`
  border: 3px solid #343434;
  `

export const CardHeader = styled.div.attrs({
  
})`
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
export const CardBody = styled.div.attrs({
  className: 'card-body'
})`
  background-color:black;
  padding: 10px 10px 10px 10px;
  background: url(/static/images/striped_bg.gif) repeat;
`

export const Label = styled.div.attrs({
})`
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
  border: ${({error})=>error ? '1px solid red' : 'none'};
  padding: 2px 12px;
  height: 36px;
  text-shadow: 1px 1px 0px #000;
  -webkit-box-shadow: inset 0px 2px 2px rgba(0,0,0,0.5);
  -moz-box-shadow: inset 0px 2px 2px rgba(0,0,0,0.5);
  box-shadow: inset 0px 2px 2px rgba(0,0,0,0.5);
  background-color: #3e3e3e;
  background: -webkit-gradient(linear, left top, left bottom, from(#545454), to(#3e3e3e));
  background: -moz-linear-gradient(top, #545454, #3e3e3e);
  border-radius: 5px;

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

export const Button = styled.button.attrs({
})`
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

export const InnerContainer = styled.div.attrs({
})`
  width:90%;
  background: transparent url(/static/images/textile_texture_bg.gif) repeat center top;
`


export const Textarea = styled.textarea.attrs({
})`
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
  font: 15px Arial, Helvetica, sans-serif;
  color: #ccc;
  outline: none;
  border: none;
  padding: 7px 12px;
  text-shadow: 1px 1px 0px #000;
  -webkit-box-shadow: inset 0px 2px 2px rgba(0,0,0,0.5);
  -moz-box-shadow: inset 0px 2px 2px rgba(0,0,0,0.5);
  box-shadow: inset 0px 2px 2px rgba(0,0,0,0.5);
  background-color: #3e3e3e;
  background: -webkit-gradient(linear, left top, left bottom, from(#545454), to(#3e3e3e));
  background: -moz-linear-gradient(top, #545454, #3e3e3e);
  border-radius: 5px;

  display: inline-block;

  position: relative;
  z-index: 2;
  width: 100%;
  height: 36px;
  background-color: #3e3e3e;
  margin-top:5px;
  

`

export const ColLeft = styled.div`
  display:inline-block;
  ${media.lessThan("medium")`
    /* screen width is less than 768px (medium) */
    width:95%;
  `}

  ${media.between("medium", "large")`
    /* screen width is between 768px (medium) and 1170px (large) */
    width:45%;
  `}

  ${media.greaterThan("large")`
    /* screen width is greater than 1170px (large) */
    width:45%;
  `}
`

export const ColRight = styled.div`
  display:inline-block;
  ${media.lessThan("medium")`
    /* screen width is less than 768px (medium) */
    width:95%;
  `}

  ${media.between("medium", "large")`
    /* screen width is between 768px (medium) and 1170px (large) */
    width:45%;
    margin-left:40px;
  `}

  ${media.greaterThan("large")`
    /* screen width is greater than 1170px (large) */
    width:45%;
    margin-left:40px;
  `}
`

export const Col = styled.div`
  display:inline-block;
  ${media.lessThan("medium")`
    /* screen width is less than 768px (medium) */
    width:95%;
  `}

  ${media.between("medium", "large")`
    /* screen width is between 768px (medium) and 1170px (large) */
    width:95%;
  `}

  ${media.greaterThan("large")`
    /* screen width is greater than 1170px (large) */
    width:95%;
  `}
`
export const WarningSpan = styled.span`
  color: red;
  font-size: .8rem;
  float: right;

`
export const Preview = styled.div.attrs({
})`
  height: 200px;
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
  overflow: auto;
  vertical-align: top;  
  margin: 10px 0px 20px 0px;
  text-align:left;
  `
export const WysEditor = styled.textarea.attrs({
  id:'full_editor'
})`
  width:100%;
  `
export const NewsView = styled.div`
  text-align: left;
  padding: 1rem;
  
`

