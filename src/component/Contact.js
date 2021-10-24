import React, {useState, useEffect} from 'react'
import Avatar from "react-avatar"
import {useDispatch} from 'react-redux'
import { Link } from 'react-router-dom'
import { DeleteAction, ToggleAction } from '../redux/actions/ContactAction'
import { BsPencil } from "react-icons/bs";
import { BsTrashFill } from "react-icons/bs";



const Contact = ({contact, selectAll}) => {
    //state
    const [cheked, setcheked] = useState()
    //handlechangeforcomlt
    const handleChange = (e) => {
        dispatch(ToggleAction(contact.id))
    }
    //useEffect for complt
    useEffect(() => {
        setcheked(contact.completed)
    }, [contact])
    //useDispatch
    const dispatch = useDispatch()
    //onclick delete
    const deleteContt = (id) => {
        const confirm = window.confirm('If you wanna delete then press OK')
        if(confirm){
            dispatch(DeleteAction(id))
        }
       
    }
    const {name, email, phone, id} = contact
    return (
        <tr>
            <td>
                <div className="custom-control custom-checkbox mt-2">
                    <input type="checkbox" id="firts" checked={selectAll}/>
                    <label htmlFor="firts" className="custom-control-label"></label>

                </div>
            </td>
            {/* complete */}
            <td>
                <div className="custom-control custom-checkbox mt-2">
                <input type="checkbox" id="firts" onChange={handleChange} checked={cheked}/>
                <label htmlFor="firts" className='custom-control-label px-2'></label>

                </div>
            </td>
              {/* complete */}
            <td>
            <Avatar className="mr-4" name={name} size="45" round={true} /> {name} 
            </td>
            <td>{phone}</td>
            <td>{email}</td>
            <td className="actions">
                <Link to={`/edit/${id}`}> 
                    <span className="mr-5"><BsPencil/></span>
                </Link>
                 
                    <span className="text-danger pointer" onClick= {() =>  deleteContt(id)}><BsTrashFill/></span>
               
                 
            </td>
        </tr>
    )
}

export default Contact
