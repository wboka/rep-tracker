import React, { Component } from 'react';

class exerciseList extends Component {
	render() {
		const { exerciseList, removeExercise } = this.props;

		const rows = exerciseList.map((row, index) => {
			return (
				<div className={'columns ' + (index % 2 !== 0 ? 'has-background-grey-lighter' : '')} key={index}>
					<div className="column">
						<b className="is-inline-mobile is-hidden-tablet">When: </b> {row.logDate.toString()}
					</div>
					<div className="column">
						<b className="is-inline-mobile is-hidden-tablet">What: </b> {row.exercise}
					</div>
					<div className="column">
						<b className="is-inline-mobile is-hidden-tablet">How Many: </b> {row.reps}
					</div>
					<div className="column">
						<button className="button is-danger is-rounded" onClick={() => removeExercise(index)}>
							Delete
						</button>
					</div>
				</div>
			);
		});

		return (
			<div>
				<div className="has-background-primary has-text-white columns is-hidden-mobile">
					<div className="column"><b>Log Date</b></div>
					<div className="column"><b>Exercise</b></div>
					<div className="column"><b>Reps</b></div>
					<div className="column">&nbsp;</div>
				</div>
				{rows}
				<hr/>
			</div>
		);
	}
}

export default exerciseList;
