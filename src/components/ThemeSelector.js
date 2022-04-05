import { useTheme } from "../hooks/useTheme";

export default function ThemeSelector() {
  const { changeMode, mode } = useTheme();

  const toggleMode = () => {
    changeMode(mode === "dark" ? "light" : "dark");
  };

  return (
    <div className="py-1 px-1">
      <input type="checkbox" className={`toggle ${mode} bg-primary`} onClick={toggleMode}></input>
    </div>
  );
}
