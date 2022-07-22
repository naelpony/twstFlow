import React from 'react'
import Slider from 'react-slick'
import style from './stylemodule/slider.module.sass';

function Slideritems(props) {
	const settings = {
		dots: false,
		infinite: false,
		arrows: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		centerMode: false,
	}
	return (
		<Slider {...settings}>
			{props.image.map((images) =>
				<div  key={images}>
					<img src={images} alt='car'  className={style.image} />
				</div>
			)}
		</Slider>
	)
}

export default Slideritems;