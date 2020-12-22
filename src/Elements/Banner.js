// import React from 'react';
import styled from 'styled-components';

export const Banner = styled.section`
    position:relative;
`
export const BannerImage = styled.img`
    border-top: 5px solid #366fa5;
    border-bottom: 2px solid #366fa5;
    width:100%;
`
export const BannerText = styled.h1`
    position: absolute;
    font-weight: normal;
    color: white;
    z-index: 200;
@media screen and (min-width:768px) {
    bottom: 2em;
    right: 1.5em;
    line-height: 1.2em;
    font-size: 1.2em;
}
@media screen and (max-width:767px) {
    display: none
}
`