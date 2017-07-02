import { ActionTypes } from "./../core/constants";

export const ActApp = {
    switchSignin: function () {
        return {
            type: ActionTypes.APP.SWITCH_TO_SIGNIN
        }
    },
    switchRegister: function () {
        return {
            type: ActionTypes.APP.SWITCH_TO_REGISTER
        }
    }
};