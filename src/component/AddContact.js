import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import { CreateAction } from '../redux/actions/ContactAction'
import shortid from 'shortid';
import {useHistory } from 'react-router-dom'

const AddContact = () => {
    const [state, setstate] = useState({
        name: '',
        phone: '',
        email: ''
    })
    //useHistory
    const {push} = useHistory()
    //handlechange
    const handleChange = (e) => {
        setstate({
            ...state,
            [e.target.name]: e.target.value
        })
    }
    //dispatch
    const dispatch = useDispatch()

    //onsubmit
    const createSubmit = (e) => {
        e.preventDefault()
        const create = {
            id: shortid.generate(),
            name: state.name,
            phone: state.phone,
            email: state.email,
            completed: false
        }
        dispatch(CreateAction(create))
        push('/')
    }
    return (
        <div className="card border-0 shadow">
             <div className="card-header headddd">Add a Contact</div>
             <div className="card-body">
                    <form onSubmit={createSubmit}>
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
                        <button className="btn mt-3  btn-outline-success" type="submit">Create Contact</button>
                      
                    </form>
             </div>
        </div>
    )
}

export default AddContact
