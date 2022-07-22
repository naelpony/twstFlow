import React from 'react';
import Slideritems from './Slideritems';

import style from './stylemodule/card.module.sass';




function Carditems(props) {
	return (
		<div className={style.container}>
			<div className={style.wrapper} >
				<div className={style.head} >
					<div className={style.name} >{props.car.model}</div>
					<sup className={style.year} >{props.car.year}</sup>
				</div>
				<p className={style.serial}>XWEJT811AC0002053</p>				
					<Slideritems 
					image={props.car.image}
					/>			
				<div className={style.description}>
					<div className={style.column}>
						<div className={style.engine}>
							<h1 className={style.headline}>Двигатель</h1>
							<div className={style.paragraph}>
								{props.car.engine.volume}
								<span className={style.green}>/</span>
								{props.car.engine.power}
								<span className={style.green}>/</span>
								{props.car.engine.type}
							</div>
						</div>
						<div className={style.transmission}>
							<h1 className={style.headline}>КПП</h1>
							<div className={style.paragraph}>{props.car.transmission}</div>
						</div>
					</div>
					<div className={style.column}>
						<div className={style.mileage}>
							<h1 className={style.headline}>Пробег</h1>
							<div className={style.paragraph}>{props.car.mileage}</div>
						</div>
						<div className={style.color}>
							<h1 className={style.headline}>Цвет</h1>
							<div className={style.paragraph}>{props.car.color}</div>
						</div>
					</div>
					<div className={style.pakeg}>
						<h1 className={style.headline}>Пакеты</h1>
						<div className={style.paragraph}>
							Зеркала заднего вида с электроп...
							<span className={style.add}>(+ ещё 32 пакета)</span>
						</div>
					</div>
				</div>
				<div className={style.footer}>
					<div className={style.left}>
						<div className={style.price}>
							{props.car.price}
							<span className={style.rb}>₽</span>
						</div>
						<div className={style.dop}>
							Доп. опции на
							<span className={style.green}>999 999</span>
							₽</div>
					</div>
					<button className={style.btn}>
						купить
					</button>
				</div>
			</div>
		</div>
	)
}
export default Carditems;