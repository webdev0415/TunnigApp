import React from 'react';
import styled from 'styled-components';

export const OurQualityPanel = styled.section`
background: transparent url(/static/images/striped_bg.gif) repeat center center;
@media screen and (min-width:768px) {
    margin:1em;
    width:30%;
    float:left;
}
@media screen and (max-width:767px) {
    width:96%;
    margin:1em auto;
}
`
export const OurQualityHeader = styled.div`
    height: 50px;
    line-height: 46px;
    padding-left: 12px;
    font-size: 16px;
    color: #fefefe;
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: transparent url(/static/images/title_bar_bg.png) repeat-x center center;
`
export const OurQualityHeaderSpan = styled.span`
    display: block;
    float: left;
    border-top: 0;
    border-bottom: 0;
    text-align:center;
`
export const OurQualityHeaderSpanImage = styled.img`
    float:left;
    margin:12px 10px 0 0;
`
export const OurQualityContent = styled.div`
    margin:0.6em;
    height:260px;
    overflow-y:scroll;
    text-align:left;
`
export const OurQualityList = styled.ul`
`
export const OurQualityListItem = styled.li`
    margin-bottom:0.4em;
`
export const OurQualityListItemEcoLabel = styled(OurQualityListItem)`
    color: #33cc00;
`