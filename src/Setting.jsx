import PropTypes from "prop-types";

import "./Setting.css";

const Setting = ({
  active,
  name,
  value,
  handler,
}) => {
  const handleIncrement = () => {
    if (!active && value + 1 <= 60)
      handler(value + 1);
  };
  const handleDecrement = () => {
    if (!active && value - 1 > 0)
      handler(value - 1);
  };

  return (
    <div
      id={name.toLowerCase()}
      className="setting-container"
    >
      <h3
        id={`${name.toLowerCase()}-label`}
        className="setting-label"
      >
        {`${name} Time`}
      </h3>
      <div className="setting">
        <div
          id={`${name.toLowerCase()}-decrement`}
          className="setting-decrement"
          onClick={handleDecrement}
        >
          <i className="fa-solid fa-caret-left"></i>
        </div>
        <div
          id={`${name.toLowerCase()}-length`}
          className="setting-length"
        >
          {value}
        </div>
        <div
          id={`${name.toLowerCase()}-increment`}
          className="setting-increment"
          onClick={handleIncrement}
        >
          <i className="fa-solid fa-caret-right"></i>
        </div>
      </div>
    </div>
  );
};

Setting.propTypes = {
  active: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  handler: PropTypes.func.isRequired,
};

export default Setting;
