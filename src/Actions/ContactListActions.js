export const GetAllContacts = ContactList => {
    return {
        type: 'GET_ALL_CONTACTS',
        payload: ContactList
    }
}


export const DeleteContact = ContactList =>{
    return{
        type: 'DELITE_CONTACT',
        payload: ContactList
    }
}