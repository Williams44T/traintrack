import React from 'react';
import { DateAndTitle, AddExercise } from './';
import { AddTrainingS } from '../styles';
import $ from 'jquery';

export default class AddTraining extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'SQUATS',
      exercises: [{
        name: 'SQUATS',
        reps: [5,5,5,5,5],
        weights: [300,300,300,300,300],
      }],
      showAdd: true,
    };
    this.ref = React.createRef();
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.addExercise = this.addExercise.bind(this);
    this.toggleAdd = this.toggleAdd.bind(this);
  }

  handleClickOutside(e) {
    if (this.ref && !this.ref.current.contains(event.target)) {
      this.props.onClick();
    }
  }

  handleChange(e) {
    if (e.target.value === '') { return }
    var value = Array(Number.parseInt(e.target.value)).fill();
    this.setState({
      exerciseInProgress: {
        [e.target.name]: value,
      }
    });
  }

  addExercise(exercise) {
    this.state.exercises.push(exercise);
    this.setState({exercises: this.state.exercises});
  }

  toggleAdd() { this.setState({showAdd: !this.state.showAdd})}

  componentDidMount() { document.addEventListener('mousedown', this.handleClickOutside) }
  componentWillUnmount() { document.removeEventListener('mousedown', this.handleClickOutside) }


  render() {
    var addExercise;
    if(this.state.showAdd) {
      addExercise = <AddTrainingS.Btn onClick={this.toggleAdd}>New Exercise</AddTrainingS.Btn>
    } else {
      addExercise = <AddExercise
        addExercise={this.addExercise}
        toggleAdd={this.toggleAdd}/>;
    }

    return <AddTrainingS.Wrap ref={this.ref}>
      <DateAndTitle day={this.props.day} />
      {addExercise}
      {this.state.exercises.map((exercise, i) => {
        return <AddTrainingS.Exercise key={i}>
          <AddTrainingS.Name>{exercise.name}</AddTrainingS.Name>
          <AddTrainingS.Sets>
            {exercise.reps.map((reps, i) => <AddTrainingS.Reps key={i}>{reps}</AddTrainingS.Reps>)}
          </AddTrainingS.Sets>
          <AddTrainingS.Weights>
            {exercise.weights.map((weight, i) => <AddTrainingS.Weights key={i + 1000}>{weight}</AddTrainingS.Weights>)}
          </AddTrainingS.Weights>
        </AddTrainingS.Exercise>
      })}
    </AddTrainingS.Wrap>;
  }
}