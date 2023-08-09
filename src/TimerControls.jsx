import PropTypes from "prop-types";

import "./TimerControls.css";

const TimerControls = ({
  active,
  setActive,
  reset,
}) => {
  const toggleActive = () =>
    setActive(() => !active);

  return (
    <div id="timer-controls">
      <div
        id="start_stop"
        onClick={toggleActive}
        title={active ? "pause" : "start"}
      >
        {active ? (
          <i className="fa-regular fa-circle-pause"></i>
        ) : (
          <i className="fa-regular fa-circle-play"></i>
        )}
      </div>
      <div
        id="reset"
        onClick={reset}
        title="reset"
      >
        <i className="fa-solid fa-rotate-left"></i>
      </div>
    </div>
  );
};

TimerControls.propTypes = {
  active: PropTypes.bool.isRequired,
  setActive: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
};

export default TimerControls;
