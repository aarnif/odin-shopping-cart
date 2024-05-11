import { useState } from "react";
import Icon from "@mdi/react";
import { mdiWhiteBalanceSunny, mdiWeatherNight } from "@mdi/js";

const ToggleDarkModeIcon = () => {
  const [darkMode, setDarkMode] = useState(false);
  console.log("Dark mode:", darkMode);

  const toggleDarkMode = () => {
    console.log("Toggling dark mode");
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark");
  };

  const iconSize = 1.4;

  return (
    <li className="flex min-w-[80px]">
      <button
        key="toggle-dark-mode"
        onClick={toggleDarkMode}
        className="p-1 rounded-full border-2 border-white hover:border-green-600 active:scale-95 transition
        dark:border-slate-900"
      >
        {darkMode ? (
          <Icon path={mdiWeatherNight} size={iconSize} />
        ) : (
          <Icon path={mdiWhiteBalanceSunny} size={iconSize} />
        )}
      </button>
    </li>
  );
};

export default ToggleDarkModeIcon;
