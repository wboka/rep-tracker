import React, { Component } from 'react';

class ExercizeList extends Component {
	render() {
		const { exercizeList, removeExercize } = this.props;

		const rows = exercizeList.map((row, index) => {
			return (
				<div className={'columns ' + (index % 2 !== 0 ? 'has-background-grey-lighter' : '')} key={index}>
					<div className="column">
						<b className="is-inline-mobile is-hidden-tablet">When: </b> {row.logDate.toString()}
					</div>
					<div className="column">
						<b className="is-inline-mobile is-hidden-tablet">What: </b> {row.exercize}
					</div>
					<div className="column">
						<b className="is-inline-mobile is-hidden-tablet">How Many: </b> {row.reps}
					</div>
					<div className="column">
						<button className="button is-danger is-rounded" onClick={() => removeExercize(index)}>
							Delete
						</button>
					</div>
				</div>
			);
		});

		return (
			<div>
				<div className="bg-midnight-green fg-desert-sand columns is-hidden-mobile">
					<div className="column"><b>Log Date</b></div>
					<div className="column"><b>Exercize</b></div>
					<div className="column"><b>Reps</b></div>
					<div className="column">&nbsp;</div>
				</div>
				{rows}
			</div>
		);
	}
}

export default ExercizeList;
