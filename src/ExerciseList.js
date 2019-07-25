import React, { Component } from 'react';

class exerciseList extends Component {
	render() {
		const { exerciseList, removeExercise } = this.props;

		const rows = exerciseList.map((row, index) => {
			return (
				<div className={'flex flex-wrap text-center sm:text-left p-2 m-2 rounded shadow bg-teal-200 sm:m-0 sm:rounded-none sm:shadow-none sm:bg-transparent ' + (index % 2 === 1 ? 'sm:bg-teal-200 ' : '') + (index === (exerciseList.length - 1) ? 'rounded-b' : '')} key={index}>
					<div className="w-full text-xl sm:text-base sm:w-1/4">
						{row.logDate.toString()}
					</div>
					<div className="w-full sm:w-1/4 font-italic text-lg sm:font-base sm:text-base">
						{row.exercise}
					</div>
					<div className="w-full sm:w-1/4">
						{row.reps}
					</div>
					<div className="w-full sm:w-1/4 text-center">
						<button className="w-full bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded-full shadow" onClick={() => removeExercise(index)}>
							Delete
						</button>
					</div>
				</div>
			);
		});

		return (
			<div className="shadow-none sm:shadow">
				<div className="hidden sm:flex sm:flex-wrap text-center sm:text-left bg-teal-500 text-white p-2 rounded-t">
					<div className="w-full sm:w-1/4"><b>Log Date</b></div>
					<div className="w-full sm:w-1/4"><b>Exercise</b></div>
					<div className="w-full sm:w-1/4"><b>Reps</b></div>
					<div className="w-full sm:w-1/4">&nbsp;</div>
				</div>
				{rows}
				<hr/>
			</div>
		);
	}
}

export default exerciseList;
