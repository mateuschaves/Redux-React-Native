import { combineReducers } from 'redux';

import { DATA_AVAILABLE } from '../actions/';
import { DATA_UNAVAILABLE } from '../actions/';

let postsState = {
    posts: [],
    loading: true,
    erros: []
};

const dataReducer = (state = postsState, action) => {
    switch(action.type){
        case DATA_AVAILABLE:
            return { ...state, posts: action.data, loading: false, errors: action.errors };
        case DATA_AVAILABLE:
            return { ...state, posts: [], loading: false, errors: action.errors };
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    dataReducer
});

export default rootReducer;