import { useSelector } from "react-redux";
import { toggleViewMode } from "../store/reducers/slice";
import store from "../store/store";
import "./bt4.css";

export default function Bt4() {
  const mode = useSelector((state: any) => state.viewMode.mode);
  const data = [1, 2, 3, 4];

  return (
    <div>
      <button onClick={() => store.dispatch(toggleViewMode())}>
        {mode === "list" ? "Grid mode" : "List mode"}
      </button>
      <div className={mode === "list" ? "list-view" : "grid-view"}>
        {data.map((item) => (
          <div key={item} className="item">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
