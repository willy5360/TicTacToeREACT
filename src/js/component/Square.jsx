import React, { useState } from "react";
import PropTypes from "prop-types";

const Square = props => {
	const [value, setValue] = useState("");

	const selecturn = turn => {
		// asignamos que el primer jugador por 🐔 y el segundo por 🥚
		if (turn == "🐔" && value == "") setValue("🐔");
		if (turn == "🥚" && value == "") setValue("🥚");
	};

	return (
		<div
			className="littleSquare"
			onClick={() => {
				selecturn(props.turn);
				props.Changeturn();
				props.saveClickPosition(props.turn, props.squarePosition); // guarda 🐔 o 🥚 + la posicion
			}}>
			{value}
		</div>
	);
};

Square.propTypes = {
	turn: PropTypes.string,
	Changeturn: PropTypes.func,
	squarePosition: PropTypes.number,
	saveClickPosition: PropTypes.func
};

export default Square;
