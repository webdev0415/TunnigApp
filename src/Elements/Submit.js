// import React from 'react';
import styled from 'styled-components';

const InputButton = styled.input`
    color: white;
    -webkit-appearance: button;
    cursor: pointer;
    font-weight: 500;
    text-decoration: none;
    text-transform: uppercase;
    text-shadow: 1px 1px 0px #1a355f;
    box-shadow: 1px 1px 3px rgba(0,0,0,0.5), inset 0 0 16px rgba(0,0,0,0.5);
    border: none;
    border-radius:50px;
    border-top: 1px solid rgba(255,255,255,0.3);
    border-bottom: 1px solid rgba(0,0,0,0.5);
    background-color: #2c507a;
    background: -moz-linear-gradient(top, #2c507a 0%, #395f89 50%, #2c507a 50%, #305681 100%);
    background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, #2c507a), color-stop(50%, #395f89), color-stop(50%, #2c507a), color-stop(100%, #305681));
    background: -webkit-linear-gradient(top, #2c507a 0%, #395f89 50%, #2c507a 50%, #305681 100%);
    background: -o-linear-gradient(top, #2c507a 0%, #395f89 50%, #2c507a 50%, #305681 100%);
    background: -ms-linear-gradient(top, #2c507a 0%, #395f89 50%, #2c507a 50%, #305681 100%);
    background: linear-gradient(to bottom, #2c507a 0%,#395f89 50%,#2c507a 50%,#305681 100%);
    white-space: nowrap;
`
export const SearchButton = styled(InputButton)`
    background-image: url(/static/images/search_icon.png) !important;
    background-image: url(/static/images/search_icon.png),-moz-linear-gradient(top, #2c507a 0%, #395f89 50%, #2c507a 50%, #305681 100%) !important;
    background-image: url(/static/images/search_icon.png),-webkit-gradient(linear, left top, left bottom, color-stop(0%, #2c507a), color-stop(50%, #395f89), color-stop(50%, #2c507a), color-stop(100%, #305681)) !important;
    background-image: url(/static/images/search_icon.png),-webkit-linear-gradient(top, #2c507a 0%, #395f89 50%, #2c507a 50%, #305681 100%) !important;
    background-image: url(/static/images/search_icon.png),-o-linear-gradient(top, #2c507a 0%, #395f89 50%, #2c507a 50%, #305681 100%) !important;
    background-image: url(/static/images/search_icon.png),-ms-linear-gradient(top, #2c507a 0%, #395f89 50%, #2c507a 50%, #305681 100%) !important;
    background-image: url(/static/images/search_icon.png),linear-gradient(to bottom, #2c507a 0%,#395f89 50%,#2c507a 50%,#305681 100%) !important;
    background-repeat: no-repeat !important;
    background-position: center center !important;
    border-radius: 50px;
    width: 50px;
    height: 29px;
    margin: 1.2em 3em 1em 0;
    padding: 4px 15px 2px 15px;
    float:right;
    &:hover {
        background-image: url(/static/images/search_icon_o.png) !important;
        background-image: url(/static/images/search_icon_o.png),-moz-linear-gradient(top, #2c507a 0%, #395f89 50%, #2c507a 50%, #305681 100%) !important;
        background-image: url(/static/images/search_icon_o.png),-webkit-gradient(linear, left top, left bottom, color-stop(0%, #2c507a), color-stop(50%, #395f89), color-stop(50%, #2c507a), color-stop(100%, #305681)) !important;
        background-image: url(/static/images/search_icon_o.png),-webkit-linear-gradient(top, #2c507a 0%, #395f89 50%, #2c507a 50%, #305681 100%) !important;
        background-image: url(/static/images/search_icon_o.png),-o-linear-gradient(top, #2c507a 0%, #395f89 50%, #2c507a 50%, #305681 100%) !important;
        background-image: url(/static/images/search_icon_o.png),-ms-linear-gradient(top, #2c507a 0%, #395f89 50%, #2c507a 50%, #305681 100%) !important;
        background-image: url(/static/images/search_icon_o.png),linear-gradient(to bottom, #2c507a 0%,#395f89 50%,#2c507a 50%,#305681 100%) !important;
        background-repeat: no-repeat !important;
        background-position: center center !important;
    }
`
export const BackButton = styled(InputButton)`
    background-image: url(/static/images/arrow_button_back.gif) !important;
    background-image: url(/static/images/arrow_button_back.gif), -moz-linear-gradient(top, #2c507a 0%, #395f89 50%, #2c507a 50%, #305681 100%) !important;
    background-image: url(/static/images/arrow_button_back.gif), -webkit-gradient(linear, left top, left bottom, color-stop(0%,#2c507a), color-stop(50%,#395f89), color-stop(50%,#2c507a), color-stop(100%,#305681)) !important;
    background-image: url(/static/images/arrow_button_back.gif), -webkit-linear-gradient(top, #2c507a 0%,#395f89 50%,#2c507a 50%,#305681 100%) !important;
    background-image: url(/static/images/arrow_button_back.gif), -o-linear-gradient(top, #2c507a 0%,#395f89 50%,#2c507a 50%,#305681 100%) !important;
    background-image: url(/static/images/arrow_button_back.gif), -ms-linear-gradient(top, #2c507a 0%,#395f89 50%,#2c507a 50%,#305681 100%) !important;
    background-image: url(/static/images/arrow_button_back.gif), linear-gradient(to bottom, #2c507a 0%,#395f89 50%,#2c507a 50%,#305681 100%) !important;
    background-repeat: no-repeat !important;
    background-position: left center !important;
    width: 140px;
    height: 29px;
    margin: 1em 1em;
    padding: 2px 5px 2px 18px;
    float:right;
    &:hover {
        color:#56b2e7;
    }
`
export const MailButton = styled(InputButton)`
    background-image: url(/static/images/icon_mail.png) !important;
    background-image: url(/static/images/icon_mail.png), -moz-linear-gradient(top, #2c507a 0%, #395f89 50%, #2c507a 50%, #305681 100%) !important;
    background-image: url(/static/images/icon_mail.png), -webkit-gradient(linear, left top, left bottom, color-stop(0%,#2c507a), color-stop(50%,#395f89), color-stop(50%,#2c507a), color-stop(100%,#305681)) !important;
    background-image: url(/static/images/icon_mail.png), -webkit-linear-gradient(top, #2c507a 0%,#395f89 50%,#2c507a 50%,#305681 100%) !important;
    background-image: url(/static/images/icon_mail.png), -o-linear-gradient(top, #2c507a 0%,#395f89 50%,#2c507a 50%,#305681 100%) !important;
    background-image: url(/static/images/icon_mail.png), -ms-linear-gradient(top, #2c507a 0%,#395f89 50%,#2c507a 50%,#305681 100%) !important;
    background-image: url(/static/images/icon_mail.png), linear-gradient(to bottom, #2c507a 0%,#395f89 50%,#2c507a 50%,#305681 100%) !important;
    background-repeat: no-repeat !important;
    background-position: left center !important;
    border-radius:50px;
    width: 190px;
    height: 29px;
    margin: 1em 0;
    padding: 2px 5px 2px 40px;
    float:right;
    &:hover {
        color:#56b2e7;
    }
`
export const TextButton = styled(InputButton)`
    width: 150px;
    height: 29px;
    margin: 0;
    padding: 4px 15px 2px 15px;
    text-align:center;
    position: absolute;
    border-radius:50px;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
`
export const MenuButton = styled(InputButton)`
    background-image: url(/static/images/toggle_nav.png) !important;
    background-image: url(/static/images/toggle_nav.png),-moz-linear-gradient(top, #2c507a 0%, #395f89 50%, #2c507a 50%, #305681 100%) !important;
    background-image: url(/static/images/toggle_nav.png),-webkit-gradient(linear, left top, left bottom, color-stop(0%, #2c507a), color-stop(50%, #395f89), color-stop(50%, #2c507a), color-stop(100%, #305681)) !important;
    background-image: url(/static/images/toggle_nav.png),-webkit-linear-gradient(top, #2c507a 0%, #395f89 50%, #2c507a 50%, #305681 100%) !important;
    background-image: url(/static/images/toggle_nav.png),-o-linear-gradient(top, #2c507a 0%, #395f89 50%, #2c507a 50%, #305681 100%) !important;
    background-image: url(/static/images/toggle_nav.png),-ms-linear-gradient(top, #2c507a 0%, #395f89 50%, #2c507a 50%, #305681 100%) !important;
    background-image: url(/static/images/toggle_nav.png),linear-gradient(to bottom, #2c507a 0%,#395f89 50%,#2c507a 50%,#305681 100%) !important;
    background-repeat: no-repeat !important;
    background-position: center center !important;
    border-radius: 5px;
    width: 50px;
    height: 50px;
    position: absolute;
    top:1em;
    left:1em;
    &:hover {
        background-image: url(/static/images/toggle_nav_o.png) !important;
        background-image: url(/static/images/toggle_nav_o.png),-moz-linear-gradient(top, #2c507a 0%, #395f89 50%, #2c507a 50%, #305681 100%) !important;
        background-image: url(/static/images/toggle_nav_o.png),-webkit-gradient(linear, left top, left bottom, color-stop(0%, #2c507a), color-stop(50%, #395f89), color-stop(50%, #2c507a), color-stop(100%, #305681)) !important;
        background-image: url(/static/images/toggle_nav_o.png),-webkit-linear-gradient(top, #2c507a 0%, #395f89 50%, #2c507a 50%, #305681 100%) !important;
        background-image: url(/static/images/toggle_nav_o.png),-o-linear-gradient(top, #2c507a 0%, #395f89 50%, #2c507a 50%, #305681 100%) !important;
        background-image: url(/static/images/toggle_nav_o.png),-ms-linear-gradient(top, #2c507a 0%, #395f89 50%, #2c507a 50%, #305681 100%) !important;
        background-image: url(/static/images/toggle_nav_o.png),linear-gradient(to bottom, #2c507a 0%,#395f89 50%,#2c507a 50%,#305681 100%) !important;
        background-repeat: no-repeat !important;
        background-position: center center !important;
    }
@media screen and (min-width:768px) {
    display:none;
}
`
export const BrandOverviewButton = styled(BackButton) `
    width: 120px;
    height: 29px;
    margin: 1em 0 1em 2em;
    padding: 2px 5px 2px 25px;
    float:left;
@media screen and (max-width:767px) {
    display:none;
}
`
export const BrandOverviewButtonMob = styled(BackButton) `
    width: 120px;
    height: 29px;
    float:none;
    margin: 1em;
    padding: 2px 5px 2px 25px;  
`
export const FacebookButton = styled(InputButton)`
    width: 150px;
    height: 29px;
    margin: 0;
    padding: 4px 15px 2px 15px;
    border-radius:50px;
    text-align:center;
    position: absolute;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%);
` 
export const OpenStreamButton = styled(InputButton)`
    width: 130px;
    height: 29px;
    margin: 0;
    padding: 4px 15px 2px 15px;
    border-radius:50px;
    text-align:center;
    position: absolute;
    bottom: 10%;
    left: 50%;
    -ms-transform: translate(-50%);
    transform: translate(-50%);
    &:hover {
        color:#56b2e7;
    }
`
export const SearchButtonSS = styled(SearchButton)`
    float:none;
    display:inline-block;
    margin:0 0 0 1em;
    padding: 8px 15px 4px 15px;
    position:relative;
    top:10px;
`
export const BackToOverviewButton = styled(BackButton)`
    float:left;
    padding: 0px 5px 2px 22px;
    margin:2em auto 2em 2.5em;
`
export const PaymentButton = styled(InputButton)`
    width:90%;
    height:29px;
    text-align:center;
    @media screen and (max-width:767px) {
        margin-bottom:1em;
    }
    &:hover {
        color: #56b2e7;
    }
`

