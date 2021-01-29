import React from 'react';

function SlidingImage({src}) {
	let imgStyles = {
		width: 100 + "%",
		height: "auto"
	};
	return(
		<img src={src} alt="" className="slidingImage" style={imgStyles} />
	)
}

export default SlidingImage;