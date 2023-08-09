import { useState } from "react";

import PropTypes from "prop-types";

import TimerControls from "./TimerControls";
import TimerDisplay from "./TimerDisplay";

import "./Timer.css";

const Timer = ({
  active,
  setActive,
  settings,
  reset,
}) => {
  const audio = document.getElementById("beep");
  const [settingIndex, setSettingIndex] =
    useState(0);

  const newReset = () => {
    audio.pause();
    audio.currentTime = 0;
    reset();
    setSettingIndex(0);
  };

  const playSound = () => {
    audio.play();
  };

  const nextSetting = () => {
    playSound();
    if (settingIndex + 1 === settings.length) {
      setSettingIndex(0);
    } else {
      setSettingIndex(
        (prevIndex) => prevIndex + 1
      );
    }
  };

  return (
    <div id="timer-container">
      <h4 id="timer-section-label">
        <i className="fa-solid fa-hourglass-half"></i>
        Timer
      </h4>
      <div id="timer">
        <TimerDisplay
          active={active}
          setting={settings[settingIndex]}
          nextSetting={nextSetting}
        />
        <TimerControls
          active={active}
          setActive={setActive}
          reset={newReset}
        />
      </div>
      <audio
        id="beep"
        preload="auto"
        src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
      ></audio>
    </div>
  );
};

Timer.propTypes = {
  active: PropTypes.bool.isRequired,
  setActive: PropTypes.func.isRequired,
  settings: PropTypes.array.isRequired,
  reset: PropTypes.func.isRequired,
};

export default Timer;
