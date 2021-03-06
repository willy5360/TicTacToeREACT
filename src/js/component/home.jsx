import React, { Fragment, useState } from "react";
import Square from "../component/Square.jsx";

const Home = () => {
	const [turn, setTurn] = useState("🐔"); // Asignando true, decimos que empieza el primer jugador
	const [title, setTitle] = useState(""); //
	const [winnerTitle, setWinnerTitle] = useState("");
	const [savedValuesArray, setSavedValuesArray] = useState(
		Array(9).fill(null)
	);

	const squareValueAndPosition = (value, squarePosition) => {
		const squareValue = [...savedValuesArray]; // Array spreading, copia los valores del array

		squareValue[squarePosition] = value; // value = 🐔 o 🥚 //
		setSavedValuesArray(squareValue); // squareValue es un array que va guardadando los valores de los click

		console.log("aqui los va rellenando", squareValue);

		let winner = IsWinner(squareValue); // esto comprueba quien ha sido el ganador(si lo hay)
		if (winner === "🐔") setTitle("The chicken came first!!! 🐔🐔🐔");
		if (winner === "🥚") setTitle("Egg Rules!!! 🥚🥚🥚");
		if (winner === "🐔" || winner === "🥚") setWinnerTitle("winner");
	};

	// esta funcion hace que cambie de 🐔 a 🥚, por lo tanto al segundo jugador
	const Changeturn = () => {
		turn == "🐔" ? setTurn("🥚") : setTurn("🐔");
	};

	const IsWinner = squareValue => {
		// se le da por parametro un array con valores de 🐔 o 🥚, y comprueba sus posiciones, si coninciden con la lista tenemos un ganador
		const WinnerNumbers = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6]
		];
		for (let position in WinnerNumbers) {
			const [firstPOS, secondPOS, thirdPOS] = WinnerNumbers[position];
			if (
				squareValue[firstPOS] != null &&
				squareValue[firstPOS] == squareValue[secondPOS] &&
				squareValue[firstPOS] == squareValue[thirdPOS]
			) {
				return squareValue[firstPOS];
			}
		}
		return null;
	};

	const voidArray = new Array(9).fill("");
	const squareBox = voidArray.map((_, index) => {
		//devuelve un array con los valores que abajo se describen
		return (
			<Square
				key={index.toString()}
				squarePosition={index}
				turn={turn} // "🐔" o "🥚" (primer o segundo jugador)
				Changeturn={Changeturn}
				saveClickPosition={squareValueAndPosition}
			/>
		);
	});
	return (
		<Fragment>
			<div className="Title_Winner">
				<h1>Which came first: the chicken or the egg?</h1>
				<h5>
					Can&apos;t find a way to decide which came first? Let&apos;s
					play a game!!!
				</h5>
			</div>
			<div className="container">
				<h2 className={winnerTitle}>{title}</h2>
				<div className="row">
					{squareBox[0]}
					{squareBox[1]}
					{squareBox[2]}
				</div>
				<div className="row">
					{squareBox[3]}
					{squareBox[4]}
					{squareBox[5]}
				</div>
				<div className="row">
					{squareBox[6]}
					{squareBox[7]}
					{squareBox[8]}
				</div>
			</div>
		</Fragment>
	);
};

export default Home;
