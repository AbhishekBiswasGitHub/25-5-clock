import { useEffect, useState } from "react";

import PropTypes from "prop-types";

import "./TimerDisplay.css";

const TimerDisplay = ({
  active,
  setting,
  nextSetting,
}) => {
  const [seconds, setSeconds] = useState(0);

  const getMinute = (seconds) => {
    const minute = Math.floor(seconds / 60);

    return minute < 10 ? `0${minute}` : minute;
  };
  const getSecond = (seconds) => {
    const second = seconds % 60;

    return second < 10 ? `0${second}` : second;
  };

  useEffect(() => {
    setSeconds(() => setting.value * 60);
  }, [setting]);

  useEffect(() => {
    let intervalId;

    if (active && seconds < 0) {
      nextSetting();
    } else if (active && seconds >= 0) {
      intervalId = setInterval(
        () =>
          setSeconds(
            (prevSeconds) => prevSeconds - 1
          ),
        1000
      );
    }

    return () => clearInterval(intervalId);
  }, [active, seconds]);

  return (
    <div id="timer-display">
      <h3 id="timer-label">{setting.name}</h3>
      <div id="time-left">
        {getMinute(seconds)}:{getSecond(seconds)}
      </div>
    </div>
  );
};

TimerDisplay.propTypes = {
  active: PropTypes.bool.isRequired,
  setting: PropTypes.object.isRequired,
  nextSetting: PropTypes.func.isRequired,
};

export default TimerDisplay;
