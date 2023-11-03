import { useEffect, useState } from "react";
import { IoPartlySunnySharp, IoSunny } from "react-icons/io5";

const DarkMode = () => {
  const storedTheme = localStorage.getItem('theme') || "dark";
  const [theme, setTheme] = useState(storedTheme);
  const element = document.documentElement;

  const options = [
    { text: "light", icon: <IoSunny /> },
    { text: "dark", icon: <IoPartlySunnySharp /> },
  ];

  useEffect(() => {
    if (theme === 'dark') {
        element.classList.add('dark');
    } else {
        element.classList.remove('dark');
    }
}, [theme]);

  const handleThemeChange = (selectedTheme) => {
    setTheme(selectedTheme);
    localStorage.setItem('theme', selectedTheme);
  };

  return (
    <div className="flex justify-center rounded-full duration-100 bg-gray-100 dark:bg-gray-500
    my-4">
      {options.map((opt) => (
        <button
          key={opt.text}
          onClick={() => handleThemeChange(opt.text)}
          className={`text-2xl px-3 py-2
                ${theme === opt.text && "text-sky-500"}`}
        >
          {opt.icon}
        </button>
      ))}
    </div>
  );
};

export default DarkMode;
