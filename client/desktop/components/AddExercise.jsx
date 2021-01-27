import React from 'react';
import { } from './';
import { AddExerciseS } from '../styles';
import $ from 'jquery';

export default class AddExercise extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      sets: 0,
      reps: [],
      weights: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.addExercise = this.addExercise.bind(this);
  }

  handleChange(e) {
    if (e.target.name.slice(0,4) === 'reps') {
      this.state.reps[+e.target.name.slice(4) - 1] = +e.target.value;
      this.setState({reps: this.state.reps});
    } else if (e.target.name.slice(0,7) === 'weights') {
      this.state.reps[+e.target.name.slice(7) - 1] = +e.target.value;
      this.setState({reps: this.state.weights});
    } else {
      this.setState({[e.target.name]: e.target.value});
    }
  }

  addExercise() {
    var exercise = {
      name: this.state.name,
      reps: this.state.reps,
      weights: this.state.weights,
    }
    this.props.addExercise(exercise);
    this.props.toggleAdd();
    this.setState({sets: 0});
  }

  render() {
    return <AddExerciseS.Wrap>
      <p>Add Exercise: </p>
      <label>Name: <input type="text" name="name" onChange={this.handleChange}/></label>
      <label>Set Count: <AddExerciseS.NumInput type="number" name="sets" min="1" placeholder="" onChange={this.handleChange}/></label>
      <div>
        <AddExerciseS.Set><p>Set# </p><p>Reps: </p><p>Weight: </p></AddExerciseS.Set>
        <AddExerciseS.Sets>
          {Array(+this.state.sets).fill().map((set, i) => {
            return <AddExerciseS.Set key={i}>
              <AddExerciseS.SetNum>{++i}</AddExerciseS.SetNum>
              <AddExerciseS.NumInput type="number" name={'reps' + i} key={i} min="1" onChange={this.handleChange}/>
              <AddExerciseS.NumInput type="number" name={'weights' + i} key={i + 1000} min="1" onChange={this.handleChange}/>
            </AddExerciseS.Set>
          })}
        </AddExerciseS.Sets>
      </div>
      <input type="submit" value="ADD" onClick={this.addExercise}/>
    </AddExerciseS.Wrap>;
  }
}