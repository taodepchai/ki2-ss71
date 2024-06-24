
import React from "react";
import { useSelector } from "react-redux";
import { changeLanguage } from "../store/reducers/slice";
import store from "../store/store";

const translations: { [key: string]: { [key: string]: string } } = {
  en: {
    hello: "Hello",
    welcome: "Welcome",
  },
  vi: {
    hello: "Xin chào",
    welcome: "Chào mừng",
  },
};

const translate = (key: string, language: string) => {
  return translations[language][key] || key;
};

const Bt6 = () => {
  const language = useSelector((state: any) => state.language.language);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLanguage = event.target.value;
    store.dispatch(changeLanguage(selectedLanguage));
  };

  return (
    <div>
      <select value={language} onChange={handleChange}>
        <option value="en">English</option>
        <option value="vi">Vietnamese</option>
      </select>
      <h1>{translate("hello", language)}</h1>
      <p>{translate("welcome", language)}</p>
    </div>
  );
};

export default Bt6;
