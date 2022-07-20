import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import style from './stylemodule/card.module.sass';
import hundai from '../assets/images/Hyundai.jpeg';
import audi from '../assets/images/Audi.jpg';
import honda from '../assets/images/Honda.jpg';
import kia from '../assets/images/Kia.jpg';
import mitsubishi from '../assets/images/M.png';
import volkswagen from '../assets/images/WW.jpg';

const arrCar = [
	{ id: 0, image: hundai, model: 'Hyundai Solaris NEW Active Plus', year: '2013', brand: 'Hyundai', color: 'Серебристо-зелёный', mileage: '160 500 км', engine: { volume: '1.6 л', power: '101 лс', type: 'бензин' }, transmission: 'Автоматическая', price: '746 150' },
	{ id: 1, image: audi, model: 'Audi A3 Sedan NEW Active Plus', year: '2020', brand: 'Audi', color: 'Зелёный', mileage: '110 000 км', engine: { volume: '1.4 л', power: '150 лс', type: 'бензин' }, transmission: 'Автоматическая', price: '1 999 000' },
	{ id: 2, image: honda, model: 'Honda CR-V NEW Active Plus', year: '2021', brand: 'Honda', color: 'Чёрный', mileage: '160 500 км', engine: { volume: '2.0 л', power: '150 лс', type: 'бензин' }, transmission: 'Автоматическая', price: '3 179 900' },
	{ id: 3, image: audi, model: 'Audi A3 Sedan NEW Active Plus', year: '2020', brand: 'Audi', color: 'Красный', mileage: '110 000 км', engine: { volume: '1.4 л', power: '150 лс', type: 'бензин' }, transmission: 'Автоматическая', price: '1 999 000' },
	{ id: 4, image: hundai, model: 'Hyundai Solaris NEW Active Plus', year: '2013', brand: 'Hyundai', color: 'Серебристо-зелёный', mileage: '160 500 км', engine: { volume: '1.6 л', power: '101 лс', type: 'бензин' }, transmission: 'Автоматическая', price: '746 150' },
	{ id: 5, image: kia, model: 'Kia Sportage NEW Active Plus', year: '2022', brand: 'Kia', color: 'Серебристый', mileage: '160 500 км', engine: { volume: '2.0 л', power: '190 лс', type: 'бензин' }, transmission: 'Автоматическая', price: '2 849 900' },
	{ id: 6, image: honda, model: 'Honda CR-V NEW Active Plus', year: '2021', brand: 'Honda', color: 'Белый', mileage: '110 000 км', engine: { volume: '2.0 л', power: '150 лс', type: 'бензин' }, transmission: 'Автоматическая', price: '3 179 900' },
	{ id: 7, image: volkswagen, model: 'Volkswagen Polo NEW Active Plus', year: '2020', brand: 'Volkswagen', color: 'Красный', mileage: '160 500 км', engine: { volume: '1.6 л', power: '110 лс', type: 'бензин' }, transmission: 'Автоматическая', price: '1 902 100' },
	{ id: 8, image: audi, model: 'Audi A3 Sedan NEW Active Plus', year: '2020', brand: 'Audi', color: 'Чёрный', mileage: '160 500 км', engine: { volume: '1.4 л', power: '150 лс', type: 'бензин' }, transmission: 'Автоматическая', price: '1 999 000' },
	{ id: 9, image: kia, model: 'Kia Sportage NEW Active Plus', year: '2022', brand: 'Kia', color: 'Зелёный', mileage: '160 500 км', engine: { volume: '2.0 л', power: '190 лс', type: 'бензин' }, transmission: 'Автоматическая', price: '2 849 900' },
	{ id: 10, image: hundai, model: 'Hyundai Solaris NEW Active Plus', year: '2013', brand: 'Hyundai', color: 'Серебристо-зелёный', mileage: '160 500 км', engine: { volume: '1.6 л', power: '101 лс', type: 'бензин' }, transmission: 'Автоматическая', price: '746 150' },
	{ id: 11, image: mitsubishi, model: 'Mitsubishi Outlander NEW Active Plus', year: '2022', brand: 'Mitsubishi', color: 'Красный', mileage: '225 500 км', engine: { volume: '2.0 л', power: '146 лс', type: 'бензин' }, transmission: 'Автоматическая', price: '3 317 000' },
	{ id: 12, image: audi, model: 'Audi A3 Sedan NEW Active Plus', year: '2020', brand: 'Audi', color: 'Белый', mileage: '110 000 км', engine: { volume: '1.4 л', power: '150 лс', type: 'бензин' }, transmission: 'Автоматическая', price: '1 999 000' },
	{ id: 13, image: volkswagen, model: 'Volkswagen Polo NEW Active Plus', year: '2020', brand: 'Volkswagen', color: 'Чёрный', mileage: '200 000 км', engine: { volume: '1.6 л', power: '110 лс', type: 'бензин' }, transmission: 'Автоматическая', price: '1 902 100' },
	{ id: 14, image: mitsubishi, model: 'Mitsubishi Outlander NEW Active Plus', year: '2022', brand: 'Mitsubishi', color: 'Серебристо-зелёный', mileage: '225 500 км', engine: { volume: '2.0 л', power: '146 лс', type: 'бензин' }, transmission: 'Автоматическая', price: '3 317 000' },
	{ id: 15, image: hundai, model: 'Hyundai Solaris NEW Active Plus', year: '2013', brand: 'Hyundai', color: 'Серебристо-зелёный', mileage: '160 500 км', engine: { volume: '1.6 л', power: '101 лс', type: 'бензин' }, transmission: 'Автоматическая', price: '746 150' },
	{ id: 16, image: audi, model: 'Audi A3 Sedan NEW Active PlusT', year: '2020', brand: 'Audi', color: 'Серебристо-зелёный', mileage: '160 500 км', engine: { volume: '1.4 л', power: '150 лс', type: 'бензин' }, transmission: 'Автоматическая', price: '1 999 000' },
	{ id: 17, image: hundai, model: 'Mitsubishi Outlander NEW Active Plus', year: '2022', brand: 'Mitsubishi', color: 'Зелёный', mileage: '225 500 км', engine: { volume: '2.0 л', power: '146 лс', type: 'бензин' }, transmission: 'Автоматическая', price: '3 317 000' },
]


function RenderCard() {
	let car = arrCar.map((item) =>
		<Col key={item.id} md={4}>
			<div className={style.container}>
				<div className={style.wrapper} >
					<div className={style.head} >
						<div className={style.name} >{item.model}</div>
						<sup className={style.year} >{item.year}</sup>
					</div>
					<p className={style.serial}>XWEJT811AC0002053</p>
					<img src={item.image} className={style.image} alt='car' />
					<div className={style.description}>
						<div className={style.column}>
							<div className={style.engine}>
								<h1 className={style.headline}>Двигатель</h1>
								<div className={style.paragraph}>
									{item.engine.volume}
									<span className={style.green}>/</span>
									{item.engine.power}
									<span className={style.green}>/</span>
									{item.engine.type}
								</div>
							</div>
							<div className={style.transmission}>
								<h1 className={style.headline}>КПП</h1>
								<div className={style.paragraph}>{item.transmission}</div>
							</div>
						</div>
						<div className={style.column}>
							<div className={style.mileage}>
								<h1 className={style.headline}>Пробег</h1>
								<div className={style.paragraph}>{item.mileage}</div>
							</div>
							<div className={style.color}>
								<h1 className={style.headline}>Цвет</h1>
								<div className={style.paragraph}>{item.color}</div>
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
								{item.price}
								<span className={style.rb}>₽</span>
							</div>
							<div className={style.dop}>
								Доп. опции на
								<span className={style.green}>999 999</span>
								₽</div>
						</div>
						<div className={style.btn}>
							купить
						</div>
					</div>
				</div>
			</div>
		</Col>

	)
	return (
		<Container>
			<Row >
				{car}
			</Row >
		</Container>
	)
}


export default RenderCard;