import propTypes from 'prop-types';
import { BtnDiv, Button } from './Feedback.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <BtnDiv>
      {options.map((option, idx) => (
        <Button key={idx} onClick={() => onLeaveFeedback(option)}>
          {option}
        </Button>
      ))}
    </BtnDiv>
  );
};

FeedbackOptions.propTypes = {
  options: propTypes.arrayOf(propTypes.string).isRequired,
  onLeaveFeedback: propTypes.func.isRequired,
};
