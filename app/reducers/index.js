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
            state = Object.assign({}, state, { posts: action.posts, loading: false, errors: action.errors });
            return state;
        case DATA_UNAVAILABLE:
            state = Object.assign({}, state, { posts: [], loading: false, errors: action.errors });
            return state;
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    dataReducer
});

export default rootReducer;