import React from 'react';
import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

export const ButtonLoader = () => {
	return (
		<Loader style={{float: 'right', marginLeft: '4px',lineHeight: '10px'}} type="Circles" color="#00BFFF" height={15} width={15}/>
		)
}
export const PageLoader = ({paddingTop}) => {
	return (
		<Loader style={{marginTop: '3px', paddingTop: `${paddingTop}px`}} type="Circles" color="#366fa5" height={35} width={35}/>
		)
}
export const OptionLoader = () => {
	return (
		<Loader style={{float: 'right', marginLeft: '5px'}} type="Circles" color="#366fa5" height={25} width={25}/>
		)
}