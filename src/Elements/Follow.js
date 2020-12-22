// import React from 'react';
import styled from 'styled-components';

export const Follow = styled.ul`
@media screen and (min-width:768px) {
    float:right;
}
@media screen and (max-width:767px) {
    margin:0 auto;
    width:80%;
}
`
export const FollowItem = styled.li`
    list-style: none;
    color:#8f8f8f;
    font-weight:bold;
    @media screen and (min-width:768px) {
    float:left;
    margin:auto 0.5em;
    }
    @media screen and (max-width:767px) {
        display:inline-block;
        width:32%;
    }

`
export const FollowItemFirst = styled(FollowItem)`
    position:relative;
    top:5px;
    @media screen and (max-width:767px) {
    display:none;
    }
`
export const FollowItemL = styled(FollowItem)`
    text-align:left;
`
export const FollowItemR = styled(FollowItem)`
    text-align:right;
`

export const FollowDir = styled.img`
    position:relative;
    left:6px;
    top:3px;
`
export const FollowImage = styled.img`
    width:28px;
    height:28px;
`
