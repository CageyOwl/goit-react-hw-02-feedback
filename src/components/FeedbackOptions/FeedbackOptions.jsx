import PropTypes from 'prop-types';
import FeedbackOptionsItem from './FeedBackOptionsItem';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  const stateKeys = Object.keys(options);

  return (
    <ul>
      {stateKeys.map(item => (
        <FeedbackOptionsItem key={item} name={item} func={onLeaveFeedback} />
      ))}
    </ul>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
  onLeaveFeedback: PropTypes.func.isRequired,
};
