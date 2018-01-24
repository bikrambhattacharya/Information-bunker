const EmailReducerDefaultState = [];

const EmailReducer = (state = EmailReducerDefaultState, action) => {
    switch (action.type) {
        case 'STORE_EMAIL':
            return [...state, action.email];
        default:
            return state;
    }
};
export default EmailReducer;