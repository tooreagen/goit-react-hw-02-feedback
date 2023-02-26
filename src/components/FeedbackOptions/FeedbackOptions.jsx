import { Component } from 'react';

export class FeedbackOptions extends Component {
  render() {
    const { options, onLeaveFeedback } = this.props;
    return (
      <div>
        {options.map(item => {
          return (
            <button
              key={item}
              type="button"
              onClick={() => onLeaveFeedback(item)}
            >
              {item}
            </button>
          );
        })}
      </div>
    );
  }
}
