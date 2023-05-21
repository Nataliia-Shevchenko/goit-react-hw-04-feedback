import React, { useState} from 'react';
import Section from 'components/Section';
import FeedbackOptions from 'components/FeedbackOptions';
import Statistics from 'components/Statistics';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = () => good + neutral + bad;

  const countPositiveFeedbackPercentage = () =>
    Math.round((good * 100) / (good + neutral + bad));
  

  const handleLeaveFeedback = e => {
    if (e.target.name === 'good') {
      setGood(prevGood => prevGood + 1);
    }
    else if (e.target.name === 'neutral') {
      setNeutral(prevNeutral => prevNeutral + 1);
    }
    else if (e.target.name === 'bad') {
      setBad(prevBad => prevBad + 1);
    }
  };


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
        total={countTotalFeedback()}
        positivePercentage={countPositiveFeedbackPercentage()}
      ></Statistics>
    </Section>
  );
};

export default App;
