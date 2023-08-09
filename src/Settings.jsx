import PropTypes from "prop-types";

import Setting from "./Setting";

import "./Settings.css";

const Settings = ({ active, settings }) => {
  return (
    <div id="settings-container">
      <h4 id="settings-label">
        <i className="fa-solid fa-gear"></i>
        Settings
      </h4>
      <div id="settings">
        {settings.map(
          ({ name, value, handler }) => (
            <Setting
              active={active}
              key={name}
              name={name}
              value={value}
              handler={handler}
            />
          )
        )}
      </div>
    </div>
  );
};

Settings.propTypes = {
  active: PropTypes.bool.isRequired,
  settings: PropTypes.array.isRequired,
};

export default Settings;
