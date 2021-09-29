import { SET_INITIAL_DATA } from "../actions/user";

const initialState = {
    userJSON: []
}

export default function (state = { ...initialState }, action) {
    switch (action.type) {
        case SET_INITIAL_DATA: {
            return { ...state, userJSON: action.data.users }
        }
        default:
            return state
    }
}