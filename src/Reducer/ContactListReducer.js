const initislState = {
    List: [],
    CurrentContact: ""
};

const ContactListReducer = (state = initislState, action) => {
    switch(action.type){
        case 'GET_ALL_CONTACTS':
            return{
                ...state,
                List: action.payload
            };
        default:
            return state;
    }
};

export default ContactListReducer;