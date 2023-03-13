import PropTypes from 'prop-types';

export default function FeedbackOptionsItem({ name, func }) {
  return (
    <li>
      <button
        onClick={event => {
          func(event.target.textContent);
        }}
      >
        {name}
      </button>
    </li>
  );
}

FeedbackOptionsItem.propTypes = {
  name: PropTypes.string.isRequired,
  func: PropTypes.func.isRequired,
};
