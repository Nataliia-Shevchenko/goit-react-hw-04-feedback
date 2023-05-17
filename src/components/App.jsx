import React, { Component } from 'react';
import Section from 'components/Section';
import FeedbackOptions from 'components/FeedbackOptions';
import Statistics from 'components/Statistics';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleLeaveFeedback = e => {
    this.setState(prevState => ({
      [e.target.name]: prevState[e.target.name] + 1,
    }));
  };

  countTotalFeedback = (good, neutral, bad) => {
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage = (good, neutral, bad) => {
    return Math.round((good * 100) / (good + neutral + bad));
  }


  render() {
    const { good, neutral, bad } = this.state;
    const TotalFeedback = this.countTotalFeedback(good, neutral, bad);
    const PositiveFeedbackPercentage = this.countPositiveFeedbackPercentage(good, neutral, bad);
   
    return (
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(this.state)}
          onLeaveFeedback={this.handleLeaveFeedback}
        ></FeedbackOptions>
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={TotalFeedback}
          positivePercentage={PositiveFeedbackPercentage}
        ></Statistics>
      </Section>
    );
  }
}

export default App;
