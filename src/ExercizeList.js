import React, { Component } from 'react';

class ExercizeList extends Component {
	render() {
		const { exercizeList, removeExercize } = this.props;

		const rows = exercizeList.map((row, index) => {
			return (
				<tr key={index}>
					<td>{row.logDate.toString()}</td>
					<td>{row.exercize}</td>
					<td>{row.reps}</td>
					<td>
						<button className="button is-danger is-rounded" onClick={() => removeExercize(index)}>
							Delete
						</button>
					</td>
				</tr>
			);
		});

		return (
			<table className="table is-fullwidth">
				<thead>
					<tr>
						<th>Log Date</th>
						<th>Exercize</th>
						<th>Reps</th>
						<th>&nbsp;</th>
					</tr>
				</thead>
				<tbody>{rows}</tbody>
			</table>
		);
	}
}

export default ExercizeList;
