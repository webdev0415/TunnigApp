import React from 'react';
import styled from 'styled-components';

export const PowerGraphPanel = styled.section`
    background: transparent url(/static/images/striped_bg.gif) repeat center center;
    font-size: .85em;
@media screen and (min-width:768px) {
    margin:1em 1em 1em 0;
    width:28%;
    float:right;
}
@media screen and (max-width:767px) {
    width:96%;
    margin:1em auto;
}
`
export const PowerGraphHeader = styled.div`
    height: 50px;
    line-height: 46px;
    padding-left: 12px;
    font-size: 16px;
    color: #fefefe;
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: transparent url(/static/images/title_bar_bg.png) repeat-x center center;
`
export const PowerGraphHeaderSpan = styled.span`
    display: block;
    float: left;
    border-top: 0;
    border-bottom: 0;
    text-align:center;
`
export const PowerGraphHeaderSpanImage = styled.img`
    float:left;
    margin:12px 10px 0 0;
`
export const PowerGraphHeaderSpanHLTitle = styled.span`
    color: #56b2e7;
    background-color: transparent;
`
export const PowerGraphContent = styled.div`
    margin:0.6em;
    cursor:pointer;
`
export const PowerGraphImage = styled.img`
    max-width:100%;
`

