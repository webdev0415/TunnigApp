// import React from 'react';
import styled from 'styled-components';

export const StagesPanel = styled.section`
    background: transparent url(/static/images/striped_bg.gif) repeat center center;
    font-size:0.85em;
@media screen and (min-width:768px) {
    margin:1em;
    width:65%;
    float:left;
}
@media screen and (max-width:767px) {
    width:97%;
    margin:1em auto;
}
`
export const StagesHeader = styled.div`
    height: 50px;
    line-height: 50px;
    font-size: 16px;
    color: #fefefe;
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: transparent url(/static/images/title_bar_bg.png) repeat-x center center;
`
export const StagesHeaderSpan = styled.span`
    display: block;
    float: left;
    border: 1px solid rgba(0, 0, 0, 0.5);
    border-top: 0;
    border-bottom: 0;
    text-align:center;
    background: ${(props)=>props.status === "active" && 'transparent url(/static/images/title_bar_bg_sel.png) repeat-x center center !important'};
`
export const StagesHeaderA = styled.a`
    display: block;
    height: 48px;
    line-height: 48px;
    padding-left: 14px; 
    padding-right: 14px;
    font-size: 16px;
    color: #fff;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-top: 0;
    border-bottom: 0;
    text-transform: capitalize;
    text-shadow: 1px 1px #000;
`
export const StagesHeaderSpanSel = styled(StagesHeaderSpan)`
    background: transparent url(/static/images/title_bar_bg_sel.png) repeat-x center center !important;
`
export const StagesTable = styled.table`
    border-spacing: 2px;
    border-collapse:separate;
    width:94%;
    margin:1em auto;
`
const StagesTableCell = styled.td`
    text-align: right;
    width: 25%;
    font-size: 1em;
    font-weight: normal;
    @media screen and (min-width:768px) {
        padding: 8px 20px 8px 8px;
    }
    @media screen and (max-width:767px) {
        padding: 8px 5px 8px 5px;
    }

`
export const StagesTableTH = styled(StagesTableCell) `
    background-color: #1d1d1d;
    border: 1px solid #313131;    
`
export const StagesTableEmptyTH = styled(StagesTableCell)`
    background-color: transparent;
    border: none;
`
export const StagesTableNBTH = styled(StagesTableCell)`
    background-color: #1d1d1d;
    border: none;    
`
export const StagesTableTD = styled(StagesTableCell)`
    background-color: #000;
`
export const StagesTableHLTD = styled(StagesTableCell)`
    color: #56b2e7;
    font-weight: bold;
    background-color: #000;
`
export const StagesTablePriceTD = styled(StagesTableTD)`
    color: #56b2e7;
    font-weight: bold;
    font-size: 24px;
`
export const StagesTableA = styled.a`
    color: #56b2e7;
    text-decoration: none;
    &:hover {
        color: #66ccff;        
    }
`
export const StagesTableSpan = styled.span`
@media screen and (min-width:768px) {
    display: inline-block;
    margin:1em;
}
@media screen and (max-width:767px) {
    display: none;
}
`

