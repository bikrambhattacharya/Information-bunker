import uuid from 'uuid';
export const addPost = (
    {
    title='',
    post='',
    message='',
    facebook='',
    twitter='',
} = {}
) => ({
    type: 'ADD_POST',
    blog:{
        id: uuid(),
        title,
        post,
        message,
        facebook,
        twitter
    }
})