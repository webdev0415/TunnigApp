import React from 'react'
import {TestimonialBox, TestimonialBoxHeader, TestimonialName, TestimonialRatings, TestimonialRating, TestimonialImage, TestimonialLink} from '../Elements/HomePanel';

const TestimonialItem = ({name, score, imgsrc, sublinktitle}) => {
	let countarr = []
	for (var i = 0; i < score; i++) {
		countarr.push(i)
	}
	return (
		<TestimonialBox>
			<TestimonialBoxHeader>
	            <TestimonialName>{name}</TestimonialName>
	            <TestimonialRatings>
	            {
	            	countarr.map((item, key)=><TestimonialRating src="/static/images/home/rating.png" alt={`Rating${key}`} key={key}/>)
	            }
	            </TestimonialRatings>
	        </TestimonialBoxHeader>
	        <TestimonialImage src={imgsrc} />
	        <TestimonialLink href="#">{sublinktitle}</TestimonialLink>
	    </TestimonialBox>
		)
}
export default TestimonialItem