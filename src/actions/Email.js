export const addEmail = ({
    email = ''
} = {}) => ({
        type: 'STORE_EMAIL',
        email: {
            email
        }
    })