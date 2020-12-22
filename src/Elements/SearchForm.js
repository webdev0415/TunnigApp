// import React from 'react';
import styled from 'styled-components';

export const SearchForm = styled.form`
@media screen and (min-width:1200px) {
    margin:1em auto;
    float: right;
}
@media screen and (min-width:768px) and (max-width:1199px) {
    margin:1em auto auto 2em;
    float: left;
}
@media screen and (max-width:767px) {
    display:none; 
}
`
export const SearchFormSS = styled.form`
    display:none;
@media screen and (max-width:767px) {
    display:block;
    text-align:center;
    width:100%;
}
`
export const SearchFullForm = styled.form`
width: 100%;
margin: 0 auto;
@media screen and (min-width:1200px) {
    margin:0 auto;
    width: 100%;
}
@media screen and (min-width:768px) and (max-width:1199px) {
    margin:1em auto auto 2em;
    float: left;
}
@media screen and (max-width:767px) {
    display:none; 
}
`