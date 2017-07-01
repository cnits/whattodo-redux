import { ActionTypes } from "./../core/constants";
import { ContactBiz } from "./../core/ContactBiz";

const initialState = [];

export default function (state = initialState, action) {
    switch (action.type) {
        case ActionTypes.CONTACT.PERSIST:
            return ContactBiz.persist(action.data);
        case ActionTypes.CONTACT.RETRIEVE:
            return ContactBiz.retrieve(action.filter);
        case ActionTypes.CONTACT.DELETE:
            return ContactBiz.delete(action.filter);
    }

    return state;
}