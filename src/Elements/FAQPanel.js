import styled from 'styled-components';

export const FAQPanel = styled.section`
    background: transparent url(/static/images/textile_texture_bg.gif) repeat center top;
    border-top: 5px solid #366fa5;
    border-bottom: 5px solid #366fa5;
`
export const FAQHeader = styled.div`
    text-align: left;
    background: transparent url(/static/images/title_bg.gif) repeat-x center center;
    width:100%;
`
const FAQHeaderDiv = styled.div`
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
`
export const FAQHeaderH1 = styled(FAQHeaderDiv)`
    margin-left: 0;
    font-size: 19px;
    padding: 0 35px 0 30px;
    height: 54px;
    z-index: 10 !important;
`
export const FAQ = styled.div`
    text-align:left;
    margin:0.5em 1em;
`
export const FAQQuestion = styled.div`
    font-size: 16px;
    font-weight: normal;
    padding-left: 22px;
    padding-top:5px;
    cursor: pointer;
    line-height: 1.6;
    color: #56b2e7;
    background: transparent url(/static/images/list_bullet.png) no-repeat left 10px;
`
export const FAQAnswer = styled.div`
    font-weight: normal;
    font-size: 14px;
    line-height: 1.6;
    padding-left:22px;
    display:none;
`
