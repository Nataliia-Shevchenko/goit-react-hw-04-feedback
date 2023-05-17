import React from 'react';
import PropTypes from 'prop-types';
import { ButtonList, ButtonElement } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonList>
      {options.map(el => (
        <li key={el}>
          <ButtonElement type="button" name={el} onClick={onLeaveFeedback}>
            {el}
          </ButtonElement>
        </li>
      ))}
    </ButtonList>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
