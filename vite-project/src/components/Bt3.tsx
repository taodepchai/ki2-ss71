import { useSelector } from "react-redux";
import { toggleTheme } from "../store/reducers/slice";
import store from "../store/store";
import './bt3.css'

const Bt3: React.FC = () => {
  const isDarkMode = useSelector((state: any) => state.theme.isDarkMode);

  const handleThemeChange = () => {
    store.dispatch(toggleTheme());
  };

  return (
    <div>
      <h1>bt3</h1>
      <div >
        <label htmlFor="theme-switch">Dark Mode</label>
        <input
          type="checkbox"
          id="theme-switch"
          checked={isDarkMode}
          onChange={handleThemeChange}
        />
        <div style={{width:'200px',height:'200px'}} className={isDarkMode ? "dark-theme" : "light-theme"}></div>
      </div>
    </div>
  );
};

export default Bt3;
