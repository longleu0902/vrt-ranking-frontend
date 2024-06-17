import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './login-reducer';

const store = configureStore({
    reducer: {
        login: loginReducer,
    }

})

export default store;