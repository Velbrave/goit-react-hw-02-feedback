import React from 'react';
import Section from 'components/Section/Section';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Statistics from 'components/Statistics/Statistics';

class App extends React.Component {
  static defaultProps = {
    initialGood: 0,
    initialNeutral: 0,
    initialBad: 0,
  };

  state = {
    good: this.props.initialGood,
    neutral: this.props.initialNeutral,
    bad: this.props.initialBad,
  };

  handleGood = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };

  handleNeutral = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };

  handleBad = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    const totalFeedback = this.countTotalFeedback();
    const goodFeedback = this.state.good;
    let result = 0;

    if (totalFeedback > 0) {
      result = Math.ceil((goodFeedback / totalFeedback) * 100);
    }

    return `${result}%`;
  };

  render() {
    const countTotalFeedback = this.countTotalFeedback();
    const countPositiveFeedbackPercentage =
      this.countPositiveFeedbackPercentage();
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            onHandleGood={this.handleGood}
            onHandleNeutral={this.handleNeutral}
            onHandleBad={this.handleBad}
          />
        </Section>
        <Section title="Statistics">
          <Statistics
            isGood={this.state.good}
            isNeutral={this.state.neutral}
            isBad={this.state.bad}
            total={countTotalFeedback}
            positive={countPositiveFeedbackPercentage}
          />
        </Section>
      </div>
    );
  }
}

export default App;
