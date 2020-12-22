import React from 'react'
import {HPPane, HPImage, HPLabel, HPTitle, HPText, HPImagePane, HPImageText, HPLink} from '../Elements/HomePanel';

export const HPItem = ({src, title, text}) => {
	return (
		<HPPane>
	        <HPImage src={src} alt={title} />
	        {
	        	title && (
	        		<HPLabel>
			            <HPTitle>{title}</HPTitle>
			            <HPText>{text}<span>read more</span> </HPText>
			        </HPLabel>
	        		)
	        }
	    </HPPane>
		)
}
export const HPYutubeItem = ({onClick, link, imgsrc, videoid, alt, text}) => {
	return (
		<HPImagePane onClick={onClick}>
            <HPLink data-link={link} data-id={videoid}>	
	               <HPImage src={imgsrc} alt={alt} />
	        </HPLink>
	        <HPImageText>{text}</HPImageText>
	    </HPImagePane>
		)
}
