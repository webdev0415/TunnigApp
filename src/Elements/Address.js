// import React from 'react';
import styled from 'styled-components';

export const Address = styled.ul`
    font-size:0.7em;
    padding:0;
    color:#666;
    text-align:left;
    @media screen and (min-width:768px) {
    float:left;
	}
	@media screen and (min-width:768px) {
	}

`
export const AddressPart = styled.li`
    list-style: none;
    @media screen and (min-width:768px) {
	    float:left;
	    margin:auto 1em;
	}
	@media screen and (max-width:767px) {
	    display:inline-block;
	    width:48%;
	    margin:0.2em auto;
	    text-align:center;
	}

`
export const AddressPartB1 = styled(AddressPart)`
@media screen and (max-width:1199px) {
    clear:both;
}
`
export const AddressPartB2 = styled(AddressPart)`
@media screen and (max-width:767px) {
    clear:both;
}
`

export const AddressItem = styled.p`
    margin:0;
    padding: 0;
`