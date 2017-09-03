import { combineReducers } from 'redux';
import GifsReducer from './gifs';
import ModalReducer from './modal';
import AuthReducer from './auth';
import { routerReducer } from 'react-router-redux';
import { reducer as FormReducer } from 'redux-form';

const rootReducer = combineReducers({
    gifs: GifsReducer,
    modal: ModalReducer,
    auth: AuthReducer,
    router: routerReducer,
    form: FormReducer
})

export default rootReducer;