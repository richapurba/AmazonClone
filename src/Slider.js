import React, { useState } from 'react';
import "./Slider.css";
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import SlidingImage from "./SlidingImage";

function Slider() {
	let slideArr = [<SlidingImage src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Home_v2_en_US_1x._CB429090084_.jpg" />, <SlidingImage src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Beauty_v2_en_US_1x._CB429089975_.jpg" />, <SlidingImage src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg" />, <SlidingImage src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Computers_1x._CB432469755_.jpg" />, <SlidingImage src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Toys_en_US_1x._CB431858161_.jpg" />];
	const [x, setX] = useState(0);
	const goLeft = () => {
		x === 0 ? setX(-100 * (slideArr.length -1)) : setX(x + 100);
	};
	const goRight = () => {
		x === -100 * (slideArr.length -1) ? setX(0) : setX(x - 100);
	};
	return(
		<div className="slider">
			{slideArr.map((item, index) => {
				return (<div key={index} className="slide" style={{transform: `translateX(${x}%)`}}>
					{item}
				</div>)
			})}
			<ChevronLeftIcon className="slider__button" id="left" onClick={goLeft} />
			<ChevronRightIcon className="slider__button" id="right" onClick={goRight} />
		</div>
	);
}

export default Slider;