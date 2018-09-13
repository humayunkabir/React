import React, { Component, Fragment } from 'react';
import Counter from './counter';

class Counters extends Component {
  render() {
    console.log('Counters - Renderd');

    const { onDelete, onIncrement, onReset, counters } = this.props;
    return (
      <Fragment>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            counter={counter}
          />
        ))}
      </Fragment>
    );
  }
}

export default Counters;
