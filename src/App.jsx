import { useMemo, useState } from "react";

import Settings from "./Settings";

import "./App.css";

const App = () => {
  const [active, setActive] = useState(false);
  const [sessionTime, setSessionTime] =
    useState(25);
  const [breakTime, setBreakTime] = useState(5);

  const reset = () => {
    setActive(() => false);
    setSessionTime(() => 25);
    setBreakTime(() => 5);
  };

  const settings = useMemo(
    () => [
      {
        name: "Session",
        value: sessionTime,
        handler: setSessionTime,
      },
      {
        name: "Break",
        value: breakTime,
        handler: setBreakTime,
      },
    ],
    [sessionTime, breakTime]
  );

  return (
    <div id="container">
      <Settings
        settings={settings}
        active={active}
      />
    </div>
  );
};

export default App;
