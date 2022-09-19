import React from 'react';
import { useAppSelector} from '../../store/hooks';
import Card from "../Card/Card";
import './Grid.scss'
import {GridState} from "../../types/types";

const Grid = ({...props}) => {

	const cards = useAppSelector(state => state.grid.cards);
	const gridState = useAppSelector(state => state.grid.currentState)
	const gridSize = useAppSelector(state => state.grid.cardCount)

	if (gridState === GridState.WIN_GAME) {
		console.log("YEAH")
	}

	const setGridStyle = () => {
		if (gridSize === 2) {
			return "GridFour"
		}
		if (gridSize === 8) {
			return "GridSixteen"
		}
		if (gridSize === 18) {
			return "GridThirtySix"
		}

	}

	return (
		<ul className={setGridStyle()}>
			{cards.map(card => <Card key={card.id} id={card.id} idImage={card.idImage} state={card.state}/>)}
		</ul>
	);
};

export default Grid;
