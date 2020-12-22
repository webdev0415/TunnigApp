// import React from 'react';
import styled from 'styled-components';

export const Spacer = styled.div`
    clear: both;
    margin-bottom: ${props => props.space ? props.space : '0'};
`
export const SpacerT = styled.div`
    clear: both;
    margin-bottom: ${props => props.space ? props.space : '0'};
`
export const Big = styled.div`
    font-size:16px;
`
export const Dark = styled.span`
    color: #333;
`
export const Anchor = styled.a`
    color: #56b2e7;
    text-decoration: none;
    &:hover {
        color:#66ccff;
    }
`