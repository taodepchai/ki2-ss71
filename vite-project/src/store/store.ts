import { configureStore } from '@reduxjs/toolkit';
import accountReducer, { authReducer, counterReducer, languageReducer, menuReducer, randomNumberReducer, themeReducer, viewModeReducer } from './reducers/slice';
const store = configureStore({
  reducer: {
    counter: counterReducer,
    randomNumber:randomNumberReducer,
    theme: themeReducer,
    viewMode: viewModeReducer,
    menu: menuReducer,
    language: languageReducer,
    accounts: accountReducer,
    auth: authReducer,
  },
});

export default store;
