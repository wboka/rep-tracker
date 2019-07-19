import React, { Component } from 'react';
import Lockr from 'lockr';
import ExerciseList from './ExerciseList';
import Form from './Form';
import Footer from './Footer';
import 'bulma';
import './App.css';

const moment = require('moment');

class App extends Component {
	state = {
		exercises: Lockr.get('exercises') || [],
		hasLocalStorage: 'localStorage' in window
	};

	removeExercise = index => {
		this.setState(previousState => {
			const newState = previousState.exercises.filter((_, i) => {
				return i !== index;
			});

			this.updateDB(newState);

			return {
				exercises: newState
			};
		});
	};

	addExercise = exercise => {
		if (exercise.exercise && exercise.reps) {
			exercise.logDate = moment().format('M/D/YYYY hh:mm a');

			this.setState(previousState => {
				const newState = [...previousState.exercises, exercise];

				this.updateDB(newState);

				return {
					exercises: newState
				};
			});
		}
	};

	updateDB = newState => {
		Lockr.set('exercises', newState);
	};

	render() {
		return (
			<div className="has-text-centered">
				<nav class="navbar is-primary" role="navigation" aria-label="main navigation">
					<div class="navbar-brand">
						<a class="navbar-item has-text-centered-mobile" href="/">
							Rep Tracker
						</a>
					</div>
					<div className="navbar-end">
						<div className="navbar-item has-text-white">
							{this.state.hasLocalStorage ? (
								<p className="is-italic">All data is stored locally on your device</p>
							) : (
								<p>Data will be lost on page refresh</p>
							)}
						</div>
					</div>
				</nav>

				<div className="container">
					<Form addExercise={this.addExercise} />
					<hr />
					<h2 className="subtitle is-2 is-4-mobile">My Exercises</h2>
					<ExerciseList exerciseList={this.state.exercises} removeExercise={this.removeExercise} />
				</div>
				<Footer />
			</div>
		);
	}
}

export default App;
