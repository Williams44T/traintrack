import React from 'react';
import { } from './';
import { AddTrainingS } from '../styles';
import $ from 'jquery';

export default class AddTraining extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'SQUATS',
      exercises: [{
        name: 'SQUATS',
        sets: [5,5,5,5,5],
        weight: [300,300,300,300,300],
      }],
    };
    this.ref = React.createRef();
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  handleClickOutside(e) {
    if (this.ref && !this.ref.current.contains(event.target)) {
      this.props.onClick();
    }
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  componentDidMount() { document.addEventListener('mousedown', this.handleClickOutside) }
  componentWillUnmount() { document.removeEventListener('mousedown', this.handleClickOutside) }


  render() {
    return <AddTrainingS.Wrap ref={this.ref}>
      <AddTrainingS.Date>{this.props.day.getDate()}</AddTrainingS.Date>
      <AddTrainingS.Label>Name Your Workout: <AddTrainingS.Title type="text" name="title" />
      </AddTrainingS.Label>
      {this.state.exercises.map((exercise, i) => {
        return <AddTrainingS.Exercise key={i}>
          <AddTrainingS.Name>{exercise.name}</AddTrainingS.Name>
          <AddTrainingS.Sets>
            {exercise.sets.map((reps, i) => <AddTrainingS.Reps key={i}>{reps}</AddTrainingS.Reps>)}
          </AddTrainingS.Sets>
          <AddTrainingS.Weights>
            {exercise.weight.map((weight, i) => <AddTrainingS.Weights key={i + 1000}>{weight}</AddTrainingS.Weights>)}
          </AddTrainingS.Weights>
        </AddTrainingS.Exercise>
      })}
    </AddTrainingS.Wrap>;
  }
}