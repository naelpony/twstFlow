import React, { useState, useEffect, useMemo, useCallback } from "react";
import Carditems from './components/Carditems';
import Listitems from './components/Listitems';
import { Container, Row, Col } from 'react-bootstrap';
import style from './style.sass';
import hundai from './assets/images/Hyundai.jpeg';
import audi from './assets/images/Audi.jpg';
import honda from './assets/images/Honda.jpg';
import kia from './assets/images/Kia.jpg';
import mitsubishi from './assets/images/M.png';
import volkswagen from './assets/images/WW.jpg';


function App() {

	const [cars, setCars] = useState([
		{ id: 0, image: [hundai, hundai], model: 'Hyundai Solaris NEW Active Plus', year: '2013', brand: 'Hyundai', color: 'Серебристо-зелёный', mileage: '160 500 км', engine: { volume: '1.6 л', power: '101 лс', type: 'бензин' }, transmission: 'Автоматическая', price: '746 150' },
		{ id: 1, image: [audi, audi], model: 'Audi A3 Sedan NEW Active Plus', year: '2020', brand: 'Audi', color: 'Зелёный', mileage: '110 000 км', engine: { volume: '1.4 л', power: '150 лс', type: 'бензин' }, transmission: 'Автоматическая', price: '1 999 000' },
		{ id: 2, image: [honda, honda], model: 'Honda CR-V NEW Active Plus', year: '2021', brand: 'Honda', color: 'Чёрный', mileage: '160 500 км', engine: { volume: '2.0 л', power: '150 лс', type: 'бензин' }, transmission: 'Автоматическая', price: '3 179 900' },
		{ id: 3, image: [audi, audi], model: 'Audi A3 Sedan NEW Active Plus', year: '2020', brand: 'Audi', color: 'Красный', mileage: '110 000 км', engine: { volume: '1.4 л', power: '150 лс', type: 'бензин' }, transmission: 'Автоматическая', price: '1 999 000' },
		{ id: 4, image: [hundai, hundai], model: 'Hyundai Solaris NEW Active Plus', year: '2013', brand: 'Hyundai', color: 'Серебристо-зелёный', mileage: '160 500 км', engine: { volume: '1.6 л', power: '101 лс', type: 'бензин' }, transmission: 'Автоматическая', price: '746 150' },
		{ id: 5, image: [kia, kia], model: 'Kia Sportage NEW Active Plus', year: '2022', brand: 'Kia', color: 'Серебристый', mileage: '160 500 км', engine: { volume: '2.0 л', power: '190 лс', type: 'бензин' }, transmission: 'Автоматическая', price: '2 849 900' },
		{ id: 6, image: [honda, honda], model: 'Honda CR-V NEW Active Plus', year: '2021', brand: 'Honda', color: 'Белый', mileage: '110 000 км', engine: { volume: '2.0 л', power: '150 лс', type: 'бензин' }, transmission: 'Автоматическая', price: '3 179 900' },
		{ id: 7, image: [volkswagen, volkswagen], model: 'Volkswagen Polo NEW Active Plus', year: '2020', brand: 'Volkswagen', color: 'Красный', mileage: '160 500 км', engine: { volume: '1.6 л', power: '110 лс', type: 'бензин' }, transmission: 'Автоматическая', price: '1 902 100' },
		{ id: 8, image: [audi, audi], model: 'Audi A3 Sedan NEW Active Plus', year: '2020', brand: 'Audi', color: 'Чёрный', mileage: '160 500 км', engine: { volume: '1.4 л', power: '150 лс', type: 'бензин' }, transmission: 'Автоматическая', price: '1 999 000' },
		{ id: 9, image: [kia, kia], model: 'Kia Sportage NEW Active Plus', year: '2022', brand: 'Kia', color: 'Зелёный', mileage: '160 500 км', engine: { volume: '2.0 л', power: '190 лс', type: 'бензин' }, transmission: 'Автоматическая', price: '2 849 900' },
		{ id: 10, image: [hundai, hundai], model: 'Hyundai Solaris NEW Active Plus', year: '2013', brand: 'Hyundai', color: 'Серебристо-зелёный', mileage: '160 500 км', engine: { volume: '1.6 л', power: '101 лс', type: 'бензин' }, transmission: 'Автоматическая', price: '746 150' },
		{ id: 11, image: [mitsubishi, mitsubishi], model: 'Mitsubishi Outlander NEW Active Plus', year: '2022', brand: 'Mitsubishi', color: 'Красный', mileage: '225 500 км', engine: { volume: '2.0 л', power: '146 лс', type: 'бензин' }, transmission: 'Автоматическая', price: '3 317 000' },
		{ id: 12, image: [audi, audi], model: 'Audi A3 Sedan NEW Active Plus', year: '2020', brand: 'Audi', color: 'Белый', mileage: '110 000 км', engine: { volume: '1.4 л', power: '150 лс', type: 'бензин' }, transmission: 'Автоматическая', price: '1 999 000' },
		{ id: 13, image: [volkswagen, volkswagen], model: 'Volkswagen Polo NEW Active Plus', year: '2020', brand: 'Volkswagen', color: 'Чёрный', mileage: '200 000 км', engine: { volume: '1.6 л', power: '110 лс', type: 'бензин' }, transmission: 'Автоматическая', price: '1 902 100' },
		{ id: 14, image: [mitsubishi, mitsubishi], model: 'Mitsubishi Outlander NEW Active Plus', year: '2022', brand: 'Mitsubishi', color: 'Серебристо-зелёный', mileage: '225 500 км', engine: { volume: '2.0 л', power: '146 лс', type: 'бензин' }, transmission: 'Автоматическая', price: '3 317 000' },
		{ id: 15, image: [hundai, hundai], model: 'Hyundai Solaris NEW Active Plus', year: '2013', brand: 'Hyundai', color: 'Серебристо-зелёный', mileage: '160 500 км', engine: { volume: '1.6 л', power: '101 лс', type: 'бензин' }, transmission: 'Автоматическая', price: '746 150' },
		{ id: 16, image: [audi, audi], model: 'Audi A3 Sedan NEW Active PlusT', year: '2020', brand: 'Audi', color: 'Серебристо-зелёный', mileage: '160 500 км', engine: { volume: '1.4 л', power: '150 лс', type: 'бензин' }, transmission: 'Автоматическая', price: '1 999 000' },
		{ id: 17, image: [mitsubishi, mitsubishi], model: 'Mitsubishi Outlander NEW Active Plus', year: '2022', brand: 'Mitsubishi', color: 'Зелёный', mileage: '225 500 км', engine: { volume: '2.0 л', power: '146 лс', type: 'бензин' }, transmission: 'Автоматическая', price: '3 317 000' },
	]);

	const [error, setError] = useState(null);
	const [isLoaded, setIsLoaded] = useState(false);
	const [model, setModel] = useState([]);
	const [selectedFilter, setSelectedFilter] = useState('');

	console.log(cars.model);
	useEffect(() => {
		fetch("https://api.carmart.ru/cars/temp?page=1&perPage=24&isNew%5B0%5D=1&orderBy%5B0%5D%5Bfield%5D=year&orderBy%5B0%5D%5Bdirection%5D=desc&brand%5B0%5D=")
			.then(res => res.json())
			.then(
				(result) => {
					setIsLoaded(true);
					setModel(result.meta.filters.brand);
				},
				(error) => {
					setIsLoaded(true);
					setError(error);
				}
			)
	}, [])

	const filters = useMemo(() => {
		if (selectedFilter) {
			return [...cars].filter((i) => i.brand === selectedFilter)
		} else {
			return cars
		}
	}, [selectedFilter, cars])

	const stateFilter = (filter) => {
		setSelectedFilter(filter);
	}

	if (!isLoaded) {
		return <p>Loading...</p>
	} else {
		return (
			<div className={style.app}>
				<Container>
					<Row >
						<Col>
							<Listitems
								value={selectedFilter}
								onChange={stateFilter}
								erorrs={error}
								options={model}
							/>
						</Col>
					</Row>
					<Row>
						{filters.map((car) =>
							<Col md={4} key={car.id}>
								<Carditems car={car} />
							</Col>
						)}
					</Row>
				</Container>
			</div>
		)
	}
}

export default App;