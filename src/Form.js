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
				<h2 className="subtitle is-2 is-4-mobile">Add Exercise</h2>

				<div className="field is-horizontal">
					<div className="field-label is-normal">
						<label className="label" htmlFor="exercise">Exercise</label>
					</div>
					<div className="field-body">
						<input
							type="text"
							className="input has-text-centered is-rounded"
							name="exercise"
							id="exercise"
							value={exercise}
							onChange={this.handleChange}
						/>
					</div>
				</div>
				<div className="field is-horizontal">
					<div className="field-label is-normal">
						<label className="label" htmlFor="reps">Reps</label>
					</div>
					<div className="field-body">
						<input
							type="number"
							className="input has-text-centered is-rounded"
							name="reps"
							id="reps"
							value={reps}
							onChange={this.handleChange}
						/>
					</div>
				</div>
				<hr />
				<button
					type="button"
					className="button is-rounded is-dark"
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
