const PostReducerDefaultState = [];

const PostReducer = (state = PostReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_POST':
            return [...state, action.blog];
        default:
            return state;
    }
};
export default PostReducer;