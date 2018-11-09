import {createStore, applyMiddleware, compose} from 'redux'; //Встроеные методы для работы со store
import rootReducer from './reducers';
import {initState} from "./reducers"; //Передадим состояния 
import thunk from "redux-thunk"; //Подключим библеотеку npm install --save redux-thunk

//Создадим store
export const store = createStore (
        rootReducer,
        initState,
        compose (
            applyMiddleware(thunk),
            window.devToolsExtension ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
        )
    );
export default store;




