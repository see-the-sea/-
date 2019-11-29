import {createStore,compose,applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import reducer from './reducer';
import createSagaMiddleware from 'redux-saga';
import todoSagas from './sagas';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();
const enhancer = composeEnhancers(
    applyMiddleware(sagaMiddleware),
)
const store = createStore(
    reducer,
    // composeEnhancers(),
    enhancer,
    );
sagaMiddleware.run(todoSagas)
export default store;