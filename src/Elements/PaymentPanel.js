import styled from 'styled-components';

export const PaymentPanel = styled.section`
    background: transparent url(/static/images/textile_texture_bg.gif) repeat center top;
    border-top: 5px solid #366fa5;
    border-bottom: 5px solid #366fa5;
`
export const PaymentPane = styled.section`
    position:relative;
    border: 1px solid #34
    padding:0 !important;
    background: transparent url(/static/images/striped_bg.gif) repeat;    
@media screen and (min-width:1200px) {
    width:582px;
    margin:1em 0 1em 0.7em;
    float:left;
}
@media screen and (min-width:768px) and (max-width:1199px) {
    width:48%;
    margin:1em 0 1em 0.7em;
    float:left;
}
@media screen and (max-width:767px) {
    width:95%;
    margin:1em auto;
}
`
export const PaymentHeader = styled.div`
    height: 50px;
    line-height: 46px;
    font-size: 16px;
    color: #ccc;
    text-align:left;
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: transparent url(/static/images/title_bar_bg.png) repeat-x center center;
`
export const PaymentHeaderDiv = styled.div`
    margin-left:1em;
`
export const PaymentHeaderButton = styled.input`
    margin: 15px 10px 0 8px;
    float:left;
`
export const PaymentHeaderText = styled.div`
    padding: 0;
    float:left;
`
export const PaymentHeaderDesc = styled.div`
    font-size:12px;
    margin: auto 8px auto auto;
    float:right;
`
export const PaymentHeaderImage = styled.img`
`
export const PaymentContent = styled.div`
    background:#000000;
`
export const CardDataL = styled.div`
@media screen and (min-width:1200px) {
    float:left;
}
@media screen and (max-width:1199px) {
    width:95%;
}
`
export const CardDataR = styled.div`
@media screen and (min-width:1200px) {
    float:right;
}
@media screen and (max-width:1199px) {
    width:45%;
}
`
export const CardsList = styled.div`
    text-align:left;
    margin:auto 1em;
`
export const CardImage = styled.img`
    margin-right:1em;
`
export const MCSecImage = styled.img`
    width:100px;
    margin: 1em 0.5em;
`
export const VisaSecImage = styled.img`
    width:35px;
    margin: 1em 0.5em;
`
export const CardDetail = styled.div`
    margin: 1em auto 0 1em;
    text-align:left;
`
export const DepositTitle = styled.div`
    text-align:left;
    padding:0.5em 0 0 1em;
@media screen and (min-width:1200px) {
    float:left;
}
@media screen and (max-width:1199px) {
    width:95%;
}
`
export const DepositItem = styled.div`
    padding:0 1em 0.5em 0;
    text-align:left;
@media screen and (min-width:1200px) {
    float:right;
    width:50%;
}
@media screen and (max-width:1199px) {
    width:95%;
}
`
export const DepositLine = styled.div`
    border:1px solid #999;
    margin:auto 1em;
`
export const TotalAmount = styled.div`
    @media screen and (min-width:1200px) {
        padding:0.4em 0.2em 0.4em 0;
        text-align:right;
    }
    @media screen and (max-width:1199px) {
        margin:auto auto auto 1em;
        padding:0 0.2em;
        width:95%;
    }
`
