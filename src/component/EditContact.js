import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { useParams, useHistory } from 'react-router-dom'
import { EditAction, GetAction } from '../redux/actions/ContactAction'
 

const EditContact = () => {
    const [state, setstate] = useState({
        name: '',
        phone: '',
        email: ''
    })
    //useparams
    const {id} = useParams() 
    //useHistory
    const {push} = useHistory()
    //useDispatch
    const dispatch = useDispatch()
    //useSelector
    const {contact} = useSelector(state =>  state.contactReducer)
    console.log(contact)
    //useEffect
    useEffect(() => {
        if(contact != null){
            setstate({
                name: contact.name,
                phone: contact.phone,
                email: contact.email
           })
        } 
     dispatch(GetAction(id))
        
        
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [contact])

    //handlechange
    const handleChange = (e) => {
        setstate({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    //onsubmit
    const editSubmit = (e) => {
        e.preventDefault()
        const edit = Object.assign(contact, {name: state.name, phone: state.phone, email: state.email})
        dispatch(EditAction(edit))
        push('/')
    }

    return (
        <div className="card border-0 shadow">
        <div className="card-header headddd">Update Contact</div>
        <div className="card-body">
               <form onSubmit={editSubmit}>
                   <div className="form-group">
                       <input
                       name = 'name' 
                       type="text" 
                       className="form-control bg-light border-0 form-gg"
                       placeholder="Enter Your Name"
                       //onChange={(e) => setstate({...state, name:e.target.value})}
                       onChange={handleChange}
                       value={state.name}
                       />
                   </div>
                   <div className="form-group">
                       <input 
                       name = 'phone'
                       type="text" 
                       className="form-control mt-3 bg-light border-0 form-gg"
                       placeholder="Enter Your Phone no."
                       onChange={handleChange}
                       value={state.phone}
                       />
                   </div>
                   <div className="form-group">
                       <input
                       name = 'email' 
                       type="text" 
                       className="form-control mt-3 bg-light border-0  form-gg"
                       placeholder="Enter Your Email"
                       onChange={handleChange}
                       value={state.email}
                       />
                   </div>
                   <button className="btn mt-3  btn-outline-success" type="submit">Update Contact</button>
                 
               </form>
        </div>
   </div>
    )
}

export default EditContact
