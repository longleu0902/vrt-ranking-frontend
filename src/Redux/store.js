import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './login-reducer';
import dataRankingReducer from './data-ranking-reducer';

const store = configureStore({
    reducer: {
        login: loginReducer,
        dataRanking : dataRankingReducer
    }

})

export default store;