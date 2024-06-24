import { createSlice } from '@reduxjs/toolkit';

const initialCounterState = 0;

const counterSlice = createSlice({
  name: 'counter',
  initialState: initialCounterState,
  reducers: {
    increment: (state) => state + 1,
    decrement: (state) => state - 1,
    reset: () => 0,
  },
});

const initialRandomNumberState = 0;

const randomNumberSlice = createSlice({
  name: 'randomNumber',
  initialState: initialRandomNumberState,
  reducers: {
    generateRandomNumber: () => {
      return Math.floor(Math.random() * 10);
    },
  },
});

const themeSlice = createSlice({
  name: 'theme',
  initialState: { isDarkMode: false },
  reducers: {
    toggleTheme: state => {
      state.isDarkMode = !state.isDarkMode;
    },
  },
});

const initialState = {
  mode: 'list', 
};

const viewModeSlice = createSlice({
  name: 'viewMode',
  initialState,
  reducers: {
    toggleViewMode: (state) => {
      state.mode = state.mode === 'list' ? 'grid' : 'list';
    },
  },
});
const menuSlice = createSlice({
  name: 'menu',
  initialState: { isExpanded: true },
  reducers: {
    toggleMenu: state => {
      state.isExpanded = !state.isExpanded;
    },
  },
});
const languageSlice = createSlice({
  name: 'language',
  initialState:{ language: 'en'},
  reducers: {
    changeLanguage: (state, action) => {
      state.language = action.payload;
    },
  },
});

const accountsSlice = createSlice({
  name: 'accounts',
  initialState:{
    accounts: [
      { id: 1, name: 'Account 1', favorite: false },
      { id: 2, name: 'Account 2', favorite: true },
      { id: 3, name: 'Account 3', favorite: false },
    ],
  },
  reducers: {
    toggleFavorite(state, action) {
      const accountId = action.payload;
      const account = state.accounts.find(acc => acc.id === accountId);
      if (account) {
        account.favorite = !account.favorite;
      }
    },
  },
});
const users = [
  { id: 1, userName: 'user1', email: 'user1@example.com', password: 'password1' },
  { id: 2, userName: 'user2', email: 'user2@example.com', password: 'password2' },
];
const authSlice = createSlice({
  name: 'auth',
  initialState:{
    currentUser: users[0], 
  },
  reducers: {
    login(state, action) {
      const { userName, password } = action.payload;
      const user = users.find(user => user.userName === userName && user.password === password);
      if (user) {
        state.currentUser = user;
      }
    },
    logout(state) {
      state.currentUser = {
        id: 0,
        userName: '',
        email: '',
        password: '',
      };
    },
  },
});


export const { toggleTheme } = themeSlice.actions;
export const { generateRandomNumber } = randomNumberSlice.actions;
export const { increment, decrement, reset } = counterSlice.actions;
export const { toggleViewMode } = viewModeSlice.actions;
export const { toggleMenu } = menuSlice.actions;
export const { changeLanguage } = languageSlice.actions;
export const { toggleFavorite } = accountsSlice.actions;
export const { login, logout } = authSlice.actions;

export const authReducer = authSlice.reducer;
export default accountsSlice.reducer;
export const languageReducer = languageSlice.reducer;
export const menuReducer = menuSlice.reducer;
export const viewModeReducer = viewModeSlice.reducer;
export const themeReducer = themeSlice.reducer;
export const counterReducer = counterSlice.reducer;
export const randomNumberReducer = randomNumberSlice.reducer;
