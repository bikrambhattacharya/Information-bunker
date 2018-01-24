import { createStore, combineReducers } from 'redux';
import PostReducer from '../reducers/AddPost';
import EmailReducer from '../reducers/EmailReducers';
export default () => {
    const store = createStore(combineReducers({
        blog: PostReducer,
        email: EmailReducer,
    }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return store;
};