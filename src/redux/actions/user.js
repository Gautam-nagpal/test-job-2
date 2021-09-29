

export const SET_INITIAL_DATA = "SET_INITIAL_DATA"

export const initialData = (data) => dispatch => {
    return new Promise((resolve, reject) => {
        dispatch({
            type: SET_INITIAL_DATA,
            data
        })
        return resolve()
    });
}

