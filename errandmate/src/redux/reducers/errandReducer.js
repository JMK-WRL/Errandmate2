const initialState = {
    errands: [],
    loading: true,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case 'FETCH_ERRANDS':
            return {
                ...state,
                errands: action.payload,
                loading: false,
            };
        default:
            return state;
    }
}
