import React, { Component } from 'react';
import Lockr from 'lockr';
import ExerciseList from './ExerciseList';
import Form from './Form';
import Footer from './Footer';
import './styles.css';

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
			<div className="text-center">
				<nav className="bg-teal-500 text-4xl p-2 mb-2 shadow" role="navigation" aria-label="main navigation">
					<a className="border-none logo-font text-white text-3xl sm:text-5xl text-bold" href="/rep-tracker">
						<b>Rep Tracker</b>
					</a>
				</nav>

				<div className="container mx-auto">
					{this.state.hasLocalStorage ? (
						<p className="italic">All data is stored locally on your device</p>
					) : (
						<p className="italic text-red-600">Data will be lost on page refresh</p>
					)}
					<Form addExercise={this.addExercise} />
					<hr />
					<h2 className="text-2xl sm:text-4xl text-bold">My Exercises</h2>
					<ExerciseList exerciseList={this.state.exercises} removeExercise={this.removeExercise} />
				</div>
				<Footer />
			</div>
		);
	}
}

export default App;
