import React, { Component } from 'react';
import merge from 'lodash/merge';
import { uniqueId } from '../../utils/idGenerator';

export default class StepForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: "",
      body: "",
      done: false,
      todo_id: this.props.todo_id
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  linkState(key) {
    return event => (this.setState({[key]: event.target.value}));
  }

  handleSubmit(e) {
    e.preventDefault();
    const step = merge({}, this.state, {id: uniqueId()});
    this.props.receiveStep(step);
    this.setState({
      title: "",
      body: ""
    });
  }

  render() {

    return (
      <div className="step-form">
        <form onSubmit={this.handleSubmit}>
          <div className="form">
            <label>Title:</label>
              <input
                placeholder="walk to store"
                value={this.state.title}
                onChange={this.linkState('title')} />

          </div>
          <div className="form">
          <label>Description:</label>
            <input
              placeholder="google store direction"
              value={this.state.body}
              onChange={this.linkState('body')} />

          </div>
          <button>Create Step!</button>
        </form>
      </div>
    );
  }
}
