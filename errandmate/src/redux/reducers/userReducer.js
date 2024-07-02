const initialState = {
    user: null,
    isAuthenticated: false,
    loading: true,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case 'USER_LOADED':
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
                user: action.payload,
            };
        case 'AUTH_ERROR':
        case 'LOGIN_FAIL':
        case 'LOGOUT':
        case 'REGISTER_FAIL':
            return {
                ...state,
                isAuthenticated: false,
                loading: false,
                user: null,
            };
        default:
            return state;
    }
}
