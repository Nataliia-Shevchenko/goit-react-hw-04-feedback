import React, { useState, useEffect } from 'react';
import Section from 'components/Section';
import FeedbackOptions from 'components/FeedbackOptions';
import Statistics from 'components/Statistics';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  // useEffect(() => {

  // }, [good, neutral, bad]);

  const handleLeaveFeedback = e => {
    if (e.target.name === good) {
      setGood(prev => {
        return prev + 1;
      });
    } else if (e.target.name === neutral) {
      setNeutral(prev => prev + 1);
    } else if (e.target.name === good) {
      setBad(prev => prev + 1);
    }
  };
  // this.setState(prevState => ({
  //     [e.target.name]: prevState[e.target.name] + 1,
  //   }));
  // };

  const countTotalFeedback = (good, neutral, bad) => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = (good, neutral, bad) => {
    return Math.round((good * 100) / (good + neutral + bad));
  };

  const TotalFeedback = countTotalFeedback(good, neutral, bad);
  const PositiveFeedbackPercentage = countPositiveFeedbackPercentage(
    good,
    neutral,
    bad
  );

  return (
    <Section title="Please leave feedback">
      <FeedbackOptions
        options={['good', 'neutral', 'bad']}
        onLeaveFeedback={handleLeaveFeedback}
      ></FeedbackOptions>
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={(TotalFeedback)}
        positivePercentage={PositiveFeedbackPercentage}
      ></Statistics>
    </Section>
  );
};

export default App;
