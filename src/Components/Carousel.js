import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const HomeCarousel = () => {
	const mapArr = [1,2,3,4,5,6,7,8,9,10,11,12,13]
	return (
		<Carousel showArrows={false} showStatus={false} showThumbs={false} autoPlay>
		{
			mapArr.map(item=> <div><img src={`images/home/car (${item}).jpg`} alt="Car Image"/></div>)
		}       
        </Carousel>
		)
}

export default HomeCarousel