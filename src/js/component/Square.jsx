import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

const Square = props => {
	const [value, setValue] = useState("");

	const selecturn = turn => {
		// asignamos que el primer jugador por true y el segundo por false
		if (turn == true && value == "") setValue("🐔");
		if (turn == false && value == "") setValue("🥚");
	};

	return (
		<div
			className="littleSquare"
			onClick={() => {
				selecturn(props.turn);
				props.Changeturn();
				props.saveClickPosition(props.turn, props.squarePosition); // guarda true o false + la posicion
				// console.log()
			}}>
			{value}
		</div>
	);
};

Square.propTypes = {
	turn: PropTypes.bool,
	Changeturn: PropTypes.func,
	squarePosition: PropTypes.number,
	saveClickPosition: PropTypes.func,
	winner: PropTypes.func
};

export default Square;
