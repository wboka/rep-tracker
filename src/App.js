import React, { Component } from 'react';
import Lockr from 'lockr';
import './App.css';
import ExercizeList from './ExercizeList';
import Form from './Form';
import 'bulma';

const moment = require('moment');

class App extends Component {
	state = {
		exercizes: Lockr.get('exercizes') || [],
		hasLocalStorage: 'localStorage' in window
	};

	removeExercize = index => {
		this.setState(previousState => {
			const newState = previousState.exercizes.filter((_, i) => {
				return i !== index;
			});

			this.updateDB(newState);

			return {
				exercizes: newState
			};
		});
	};

	addExercize = exercize => {
		exercize.logDate = moment().format('M/D/YYYY hh:mm a');

		this.setState(previousState => {
			const newState = [...previousState.exercizes, exercize];

			this.updateDB(newState);

			return {
				exercizes: newState
			};
		});
	};

	updateDB = newState => {
		Lockr.set('exercizes', newState);
	};

	render() {
		return (
			<div className="App">
				<h1 className="is-size-1">Rep Tracker</h1>
				{this.state.hasLocalStorage ? (
					<p>All data is stored locally on your device</p>
				) : (
					<p>Data will be lost on page refresh</p>
				)}
				<h2 className="is-size-2">Add/Edit Exercize</h2>
				<Form addExercize={this.addExercize} />
				<hr />
				<h2 className="is-size-2">My Exercizes</h2>
				<ExercizeList exercizeList={this.state.exercizes} removeExercize={this.removeExercize} />
			</div>
		);
	}
}

export default App;
