import React, { Component } from 'react';
import { connect } from 'react-redux';
import Controls from '../components/Controls';
import History from '../components/History';
import styled from 'styled-components';

import {
  INCREMENT,
  DECREMENT,
  ADD_HISTORY,
  REMOVE_HISTORY,
} from '../store/actionTypes';

const Button = styled.button`
  background-color: white;
  color: #333;
  border: 2px solid #333;
  padding: 0.5em 1em;
  cursor: pointer;
  margin-right: 0.5em;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 0.5em;
`;

class Counter extends Component {
  render() {
    return (
      <>
        <Title>Counter: {this.props.counter}</Title>
        <Controls
          onIncrementCounter={this.props.onIncrementCounter}
          onDecrementCounter={this.props.onDecrementCounter}
        ></Controls>
        <Button onClick={() => this.props.addHistory(this.props.counter)}>
          Add to History
        </Button>
        <History
          history={this.props.history}
          removed={this.props.removeHistory}
        ></History>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter.counter,
    history: state.history.history,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrementCounter: () => dispatch({ type: INCREMENT }),
    onDecrementCounter: () => dispatch({ type: DECREMENT }),
    addHistory: (value) => dispatch({ type: ADD_HISTORY, payload: { value } }),
    removeHistory: (id) => dispatch({ type: REMOVE_HISTORY, payload: { id } }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
