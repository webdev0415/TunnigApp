// import React from 'react';
import styled from 'styled-components';

export const SearchInput = styled.input`
    color:#999;
    border-radius:50px;
    width:180px;
    height:27px;
    margin:1em;
    padding: 4px 22px 2px 22px;
    font-size:14px;
    -webkit-box-shadow: inset 0px 2px 2px rgba(0,0,0,0.5);
    -moz-box-shadow: inset 0px 2px 2px rgba(0,0,0,0.5);
    text-shadow: 1px 1px 0px #000;
    box-shadow: inset 0px 2px 2px rgba(0,0,0,0.5);
    border:none;
    background-color: #3e3e3e;
    background: -webkit-gradient(linear, left top, left bottom, from(#545454), to(#3e3e3e));
    background: -moz-linear-gradient(top, #545454, #3e3e3e);
    line-height: normal;
    float:right;
`
export const SearchInputSS = styled(SearchInput)`
    width:60%;
    height:27px;
    margin:1em auto;
    float:none;
`
export const CardInput = styled(SearchInput)`
    color:#999;
    border-radius:5px;
    height:27px;
    font-size:14px;
    padding: 4px 10px 2px 10px;
    float:none;
    -webkit-box-shadow: inset 0px 2px 2px rgba(0,0,0,0.5);
    -moz-box-shadow: inset 0px 2px 2px rgba(0,0,0,0.5);
    text-shadow: 1px 1px 0px #000;
    box-shadow: inset 0px 2px 2px rgba(0,0,0,0.5);
    border:none;
    background-color: #3e3e3e;
    background: -webkit-gradient(linear, left top, left bottom, from(#545454), to(#3e3e3e));
    background: -moz-linear-gradient(top, #545454, #3e3e3e);
    line-height: normal;
`
export const CardData1 = styled(CardInput)`
    margin:auto 1em 1em 1em;
@media screen and (min-width:1200px) {
    width:340px;
}
@media screen and (max-width:1199px) {
    width:95%;
}
`
export const CardData2 = styled(CardInput)`
    margin:auto 1em 1em 1em;
@media screen and (min-width:1200px) {
    width:130px;
}
@media screen and (max-width:1199px) {
    width:95%;
}
`
export const DepositCurrency = styled.select`
    height:34px;
    padding:0.8em 0.5em 0.4em 0.5em;
    @media screen and (min-width:1200px) {
        float:right;
        width:100%;
    }
    @media screen and (max-width:1199px) {
        margin-left:1em;
        width:97%;
    }
`
export const DepositOption = styled.option`
`
export const CurrencyAmount = styled.label`
    margin:0;
@media screen and (min-width:1200px) {
    float:right;
    width:94%;
}
@media screen and (max-width:1199px) {
    margin-left:1em;
    width:95%;
}
`

export const SearchFullInput = styled.input`
    width: 80%;
    color:#999;
    border-radius:50px;
    height:27px;
    margin:1em;
    padding: 4px 22px 2px 22px;
    font-size:14px;
    -webkit-box-shadow: inset 0px 2px 2px rgba(0,0,0,0.5);
    -moz-box-shadow: inset 0px 2px 2px rgba(0,0,0,0.5);
    text-shadow: 1px 1px 0px #000;
    box-shadow: inset 0px 2px 2px rgba(0,0,0,0.5);
    border:none;
    background-color: #3e3e3e;
    background: -webkit-gradient(linear, left top, left bottom, from(#545454), to(#3e3e3e));
    background: -moz-linear-gradient(top, #545454, #3e3e3e);
    line-height: normal;
`