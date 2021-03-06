import { ActionTypes, AuthStates } from "./../core/constants";

const initialState = [];

export default function (state = initialState, action) {
    switch (action.type) {
        case ActionTypes.APP.SWITCH_TO_SIGNIN:
            return { authState: AuthStates.SIGNIN };
        case ActionTypes.APP.SWITCH_TO_REGISTER:
            return { authState: AuthStates.REGISTER };
        //return [...state, ...{ authState: AuthStates.REGISTER }];//Not understand yet
    }
    return state;
}