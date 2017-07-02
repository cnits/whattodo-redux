import { ActionTypes, AuthStates } from "./../core/constants";

const initialState = [];

export default function (state = initialState, action) {
    switch (action.type) {
        case ActionTypes.APP.SWITCH_TO_SIGNIN:
            return Object.assign({ authState: AuthStates.SIGNIN }, state);
        case ActionTypes.APP.SWITCH_TO_REGISTER:
            return Object.assign({ authState: AuthStates.REGISTER }, state);//[...state, ...{ authState: AuthStates.REGISTER }];
    }
    return state;
}