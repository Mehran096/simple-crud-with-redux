import { CREATE_CONTACT, DELETE_ALL_CONTACTS, DELETE_CONTACT, EDIT_CONTACT, GET_CONTACT, SELECT_ALL, SELECT_ALL_RESET, SERAC_NAME, TOGGLE_TODO } from "../types/ContactTypes";

export const CreateAction = (state) => ({
    type: CREATE_CONTACT,
    payload: state
})

//GET contact
export const GetAction = (id) => ({
    type: GET_CONTACT,
    payload: id
})

//EDIT CONTACT
export const EditAction = (state) => ({
    type: EDIT_CONTACT,
    payload: state
})

//DELETE CONTACT
export const DeleteAction = (id) => ({
    type: DELETE_CONTACT,
    payload: id
})

//selectall
export const SelectAllAction = (id) => ({
    type: SELECT_ALL,
    payload: id
})
 //reset all
 export const ResetAllAction = () => ({
     type: SELECT_ALL_RESET,
     
 })

 //delete all contact
 export const DeleteAllAction = () => ({
     type: DELETE_ALL_CONTACTS,
     
 })

 //search
 export const searchAction = (name) => ({
     type: SERAC_NAME,
     payload: name
 })

 //FOR COMPLETED
 export const ToggleAction = (id) => ({
    type: TOGGLE_TODO,
    payload: {id}
})
 
 
 



