import { ActionTypes } from "./../core/constants";

export const ActContact = {
    persist: function (contact) {
        return {
            type: ActionTypes.CONTACT.PERSIST,
            data: contact
        }
    },
    retrieve: function (filter) {
        return {
            type: ActionTypes.CONTACT.RETRIEVE,
            filter
        }
    },
    delete: function (filter) {
        return {
            type: ActionTypes.CONTACT.DELETE,
            filter
        }
    }
};