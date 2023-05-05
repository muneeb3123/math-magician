import PropTypes from 'prop-types';

function Button({ value, operation = false, onClick }) {
  const handleClick = () => {
    onClick(value);
  };

  const buttonClass = `silver button-${value} calculator-button${operation ? ' operation' : ''}`;

  return (
    <button type="button" className={buttonClass} onClick={handleClick}>
      {value}
    </button>
  );
}

Button.propTypes = {
  value: PropTypes.string.isRequired,
  operation: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  operation: false,
};

export default Button;
