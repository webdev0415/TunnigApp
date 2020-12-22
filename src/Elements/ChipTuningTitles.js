import React from 'react';
import styled from 'styled-components';

export const ChipTuningTitles = styled.div`
    text-align: left;
    background: transparent url(/static/images/title_bg.gif) repeat-x center center;
    width:100%;
    margin-top: 1em;
`
const ChipTuningDiv = styled.div`
    position: relative;
    float: left;
    height: 54px;
    font-size: 16px;
    line-height: 52px;
    margin: 0;
    padding: 0 35px 0 35px;
    color: white;
    font-weight: 300;
    background: transparent url(/static/images/title_item_bg.png) no-repeat right top;
    margin-left: -22px;
    display:none;
`
export const ChipTuningH1 = styled(ChipTuningDiv)`
    margin-left: 0;
    font-size: 19px;
    padding: 0 35px 0 30px;
    height: 54px;
    z-index: 10 !important;
@media screen and (min-width:768px) {
    display:block;
}
`
export const ChipTuningH11 = styled(ChipTuningDiv)`
    margin-left: 0;
    font-size: 19px;
    padding: 0 35px 0 30px;
    height: 54px;
    z-index: 10 !important;
    @media screen and (max-width:767px) {
        display:block;
    }
`
const CategoryDiv = styled(ChipTuningDiv)`
    cursor:pointer;
    &:hover {
        color:#56b2e7;
    }
    @media screen and (min-width:768px) {
        display:block;
    }
`
export const ChipTuningH2 = styled(CategoryDiv)`
    z-index: 9 !important;
`
export const ChipTuningH3 = styled(CategoryDiv)`
    z-index: 8 !important;
    cursor:pointer;
`
export const ChipTuningH4 = styled(CategoryDiv)`
    z-index: 7 !important;
`
export const ChipTuningH5 = styled(CategoryDiv)`
    z-index: 6 !important;
`
export const ChipTuningH6 = styled(CategoryDiv)`
    z-index: 5 !important;
`
export const ChipTuningEdit = styled.div`
`