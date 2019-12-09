import React, { Component } from 'react';

class Form extends Component {
	constructor(props) {
		super(props);

		this.initialState = {
			exercise: '',
			reps: ''
		};

		this.state = this.initialState;
	}

	handleChange = event => {
		const { name, value } = event.target;

		this.setState({
			[name]: value
		});
	};

	addExercise = () => {
		this.props.addExercise(this.state);
		this.setState(this.initialState);
	};

	render() {
		const { exercise, reps } = this.state;

		return (
			<form className="container">
				<h2 className="text-2xl sm:text-4xl text-bold">Add Exercise</h2>

				<div className="flex items-center border-b border-b-2 border-teal-500 p-2">
					<label className="font-bold" htmlFor="exercise">
						Exercise
					</label>
					<input
						type="text"
						className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
						name="exercise"
						id="exercise"
						placeholder="Push Ups"
						aria-label="Exercise"
						value={exercise}
						onChange={this.handleChange}
					/>
				</div>
				<div className="flex items-center border-b border-b-2 border-teal-500 p-2">
					<label className="font-bold" htmlFor="reps">
						Reps
					</label>
					<input
						type="number"
						className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
						name="reps"
						id="reps"
						placeholder="50"
						aria-label="Reps"
						value={reps}
						onChange={this.handleChange}
					/>
				</div>
				<hr />
				<button
					type="button"
					className="bg-teal-700 hover:bg-teal-500 text-white py-2 px-4 rounded-full shadow"
					onClick={this.addExercise}
					disabled={!exercise.trim() || !reps.trim()}
				>
					Add Exercise
				</button>
			</form>
		);
	}
}

export default Form;
