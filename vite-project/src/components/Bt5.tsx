import { useSelector } from "react-redux";
import { toggleMenu } from "../store/reducers/slice";
import store from "../store/store";
import "./bt5.css";

const Bt5 = () => {
  const isExpanded = useSelector((state: any) => state.menu.isExpanded);

  const handleToggle = () => {
    store.dispatch(toggleMenu());
  };

  return (
    <div className={`menu ${isExpanded ? "expanded" : "collapsed"}`}>
      <ul>
        <li>
          <span className="icon">📊</span>
          {isExpanded && <span>Bảng điều khiển</span>}
        </li>
        <li>
          <span className="icon">👤</span>
          {isExpanded && <span>Tài khoản</span>}
        </li>
        <li>
          <span className="icon">💰</span>
          {isExpanded && <span>Tài sản</span>}
        </li>
        <li>
          <span className="icon">📈</span>
          {isExpanded && <span>Thống kê</span>}
        </li>
        <li>
          <span className="icon">📄</span>
          {isExpanded && <span>Tài liệu</span>}
        </li>
        <li onClick={handleToggle}>
          <span className="icon">{isExpanded ? "⬅️" : "➡️"}</span>
          {isExpanded && <span>Thu gọn</span>}
        </li>
      </ul>
    </div>
  );
};

export default Bt5;
