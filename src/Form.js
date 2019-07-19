import React, { Component } from 'react';

class Form extends Component {
	constructor(props) {
		super(props);

		this.initialState = {
			exercize: '',
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

	addExercize = () => {
		this.props.addExercize(this.state);
		this.setState(this.initialState);
	};

	render() {
		const { exercize, reps } = this.state;

		return (
			<form>
				<label className="label">Exercize</label>
				<input
					type="text"
					className="input has-text-centered"
					name="exercize"
					id="exercize"
					value={exercize}
					onChange={this.handleChange}
				/>
				<label className="label">Reps</label>
				<input type="number" className="input has-text-centered" name="reps" id="reps" value={reps} onChange={this.handleChange} />
				<hr/>
				<button type="button" className="button is-rounded is-primary" onClick={this.addExercize} disabled={!exercize.trim() || !reps.trim()}>
					Add Exercize
				</button>
			</form>
		);
	}
}

export default Form;
