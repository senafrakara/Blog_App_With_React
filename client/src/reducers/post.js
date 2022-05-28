//recucer, bir action ve state değeri alır, action tipine göre ve initial state e göre yeni redux stateini döndürür.
import * as types from "../actions/types";

const initialState = {
    posts: []
};

const postReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.FETCH_POSTS:
            return {
                ...state,
                posts: action.payload,

            };

            default: 
                return {
                    ...state,
                };
    }
};

export default postReducer;