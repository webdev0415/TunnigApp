// import React from 'react';
import styled from 'styled-components';

export const Logo = styled.div`

@media screen and (min-width:1200px) {
    margin:2em auto auto 1em;
    float:left;
}
@media screen and (min-width:768px) and (max-width:1199px) {
    clear:both;
    text-align:center;
}
@media screen and (max-width:767px) {
    float:right;
    margin:0.5em;
}
`
export const LogoImage = styled.img`
width: 399px;
height: 78px;
@media screen and (max-width:767px) {
    width:50%;
    float:right;
}
`
