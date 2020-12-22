// import React from 'react';
import styled from 'styled-components';

export const SubMenu = styled.ul`
    position:absolute;
    padding:0;
    z-index:1000;
    width:460px;
    display:none;
`
export const SubMenuLD = styled(SubMenu)`
    left:0;
`
export const SubMenuRD = styled(SubMenu)`
    right:0;
`
const SubMenuItem = styled.li`
    list-style:none;
    color:#ccc;
    &:hover {
        color: #56b2e7;
    }
`
export const SubMenuLDArrow = styled(SubMenuItem)`
    margin:auto 0.5em auto auto;
    float:left;
`
export const SubMenuLDItem = styled(SubMenuItem)`
    position:relative;
    top:4px;
    margin:auto 1.5em auto auto;
    float:left;
`
export const SubMenuRDArrow = styled(SubMenuItem)`
    margin:auto auto auto 0.5em;
    float:right;
`
export const SubMenuRDItem = styled(SubMenuItem)`
    position:relative;
    top:4px;
    margin:auto auto auto 1.5em;
    float:right;
`
export const Menu = styled.ul`
    font-size:0.8em;
@media screen and (min-width:1200px) {
    float:right;
}
@media screen and (max-width:767px) {
    display:none;
}
`
export const MenuItem = styled.li`
    list-style:none;
    display:inline-block;
    margin:auto 1.5em;
    cursor:pointer;
    position:relative;
    color: #ccc;
    &:hover {
        color: #56b2e7;
    }
    &:hover ${SubMenu} {
        display:block;
    }
`
export const MobileMenu = styled.div`
    position: absolute;
    right: auto;
    left: 0;
    top: 0; 
    width: 90%;
    height: auto;
    padding: 2em 1em 1em 1em;
    text-align:left;
    z-index:2000;
    background: transparent url(/static/images/textile_texture_bg.gif) repeat center center;
    display:none;
    @media screen and (min-width:768px) {
        display:none;
    }
`
const MobileItem = styled.div`
    cursor:pointer;
    &:hover {
        color: #56b2e7;
    }
`
export const MobileMenuItem = styled(MobileItem)`
    margin:0.8em auto auto 1em;
`
export const MobileSubMenuItem = styled(MobileItem)`
    margin:0.4em auto auto 2em;
`
export const MobileMenuCloseButton = styled(MobileItem)`
    float:right;
    position:relative;
    top:-1em;
    font-weight:bold;
`